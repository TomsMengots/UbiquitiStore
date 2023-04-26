import { useQuery } from "@tanstack/react-query";
import { Lato } from "next/font/google";
import { useMemo, useState } from "react";
import { DeviceGrid } from "~/components/DeviceGrid";
import { DeviceTable } from "~/components/DeviceTable";
import { Filters } from "~/components/Filters";
import { Header } from "~/components/Header";
import { IDeviceModel, IDevicesResponseModel } from "~/core/types/Devices";
import { ActiveViewType, IFilters } from "~/core/types/Filters";
import { USpinner } from "~/components/common/USpinner";
import { DeviceModal } from "~/components/DeviceModal";
import { UEmptyState } from "~/components/common/UEmptyState";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  const [selectedDevice, setSelectedDevice] = useState<IDeviceModel>(
    {} as IDeviceModel
  );

  const [filters, setFilters] = useState<IFilters>({
    search: "",
    types: [],
    view: ActiveViewType.LIST,
  });

  const {
    data = { devices: [] },
    isLoading,
    error,
  } = useQuery<IDevicesResponseModel>({
    queryKey: ["items"],
    queryFn: async () => {
      const response = await fetch("/api/devices");

      return response.json();
    },
  });

  const updateFilters = (filter: { search?: string; types?: string[] }) => {
    const updatedFilters = { ...filters, ...filter };

    setFilters(updatedFilters);
  };

  const onSelectedDevice = (device: IDeviceModel) => {
    setSelectedDevice(device);
    document.documentElement.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setSelectedDevice({} as IDeviceModel);
    document.documentElement.classList.remove("overflow-hidden");
  };

  const productLineChoices = useMemo(() => {
    const choiceArray = (data?.devices ?? []).map(
      ({ line }: { line: { name: string } }) => line.name
    );

    return [...new Set(choiceArray)];
  }, [data.devices]);

  const filteredDevices = useMemo(() => {
    if (!filters.search && !filters.types.length) {
      return data.devices;
    }

    return data.devices.filter(({ product, line }) => {
      const hasMatchingSearch = product.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());

      if (!filters.types.length) {
        return hasMatchingSearch;
      }

      if (!filters.search) {
        return filters.types.includes(line.name);
      }

      return hasMatchingSearch && filters.types.includes(line.name);
    });
  }, [data.devices, filters.search, filters.types]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <USpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`flex items-center justify-center h-screen w-screen ${lato.className}`}
      >
        <UEmptyState
          title="Whooops... Something Went Wrong"
          description="Please Try Again"
          isError={true}
        />
      </div>
    );
  }

  if (selectedDevice.id) {
    return (
      <div className={`${lato.className}`}>
        <Header />
        <DeviceModal device={selectedDevice} onCloseModal={closeModal} />
      </div>
    );
  }

  return (
    <div
      className={`h-full w-full min-h-screen box-border mx-auto pb-20 ${lato.className}`}
    >
      <Header />
      <Filters
        productChoices={productLineChoices}
        filters={filters}
        updateFilters={updateFilters}
      />

      {filters.view === ActiveViewType.LIST ? (
        <DeviceTable
          devices={filteredDevices}
          onSelectDevice={onSelectedDevice}
        />
      ) : (
        <DeviceGrid
          devices={filteredDevices}
          onSelectDevice={onSelectedDevice}
        />
      )}
    </div>
  );
}
