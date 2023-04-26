import { IDeviceModel } from "~/core/types/Devices";
import { UEmptyState } from "./common/UEmptyState";
import { DeviceGridItem } from "./DeviceGridItem";

interface IProps {
  devices: IDeviceModel[];
  onSelectDevice: Function;
}

const DeviceGrid = ({ devices, onSelectDevice }: IProps) => {
  if (!devices.length) {
    return (
      <UEmptyState
        title="No Devices To Display"
        description="Try updating your filters to see the devices"
      />
    );
  }

  const selectDevice = (device: IDeviceModel) => {
    onSelectDevice(device);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full px-4 md:max-w-[1262px]">
        <p className="text-xs leading-5 text-ubiqiti-neutral-4 my-2.5">
          {devices.length} Devices
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 w-full md:w-auto md:max-w-[1262px]">
        {devices.map((device) => (
          <button
            key={device.id}
            type="button"
            className="outline-none w-full"
            onClick={() => selectDevice(device)}
          >
            <DeviceGridItem item={device} />
          </button>
        ))}
      </div>
    </div>
  );
};

export { DeviceGrid };
