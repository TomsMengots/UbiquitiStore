import { IDeviceModel, INetworkRadiosModel } from "~/core/types/Devices";
import { UArrowIcon } from "~/components/common/UArrowIcon";
import Image from "next/image";
import { ICONS_BASE_URL } from "~/core/configs/AppConfig";

interface IProps {
  device: IDeviceModel;
  onCloseModal: Function;
}

const DeviceModal = ({ device, onCloseModal }: IProps) => {
  const getMaxSpeed = (maxSpeed: number | undefined = undefined) => {
    if (!maxSpeed) {
      return null;
    }

    return `${maxSpeed} Mbps`;
  };

  const getMaxPower = (radios: INetworkRadiosModel | undefined) => {
    if (!radios) {
      return null;
    }

    const radioWithPower = Object.values(radios).find(
      ({ maxPower }) => !!maxPower
    );

    return !!radioWithPower?.maxPower ? `${radioWithPower.maxPower} W` : null;
  };

  const data = [
    {
      label: "Product Line",
      value: device.line.name,
    },
    {
      label: "ID",
      value: device.id,
    },
    {
      label: "Name",
      value: device.product.abbrev,
    },
    {
      label: "Short name",
      value: (device.shortnames ?? []).join(", "),
    },
    {
      label: "Max power",
      value: getMaxPower(device.unifi?.network?.radios),
    },
    {
      label: "Speed",
      value: getMaxSpeed(
        device.unifi?.network?.ethernetMaxSpeedMegabitsPerSecond
      ),
    },
    {
      label: "Number of ports",
      value: device.unifi?.network?.numberOfPorts ?? null,
    },
  ];

  return (
    <div className="device-modal fixed top-14 bg-white z-20 w-full pb-20">
      <div className="relative h-12 border-b border-b-ubiquiti-neutral-3 flex justify-between pl-[30px] pr-7">
        <button
          type="button"
          className="flex items-center mb-1"
          onClick={() => onCloseModal()}
        >
          <UArrowIcon />
        </button>
        <h4 className="text-ubiquiti-black-45 text-sm leading-[44px]">
          {device.product.name}
        </h4>
        &nbsp;
      </div>

      <div className="h-full w-full flex flex-col md:flex-row items-center md:justify-center mt-8 md:mt-0">
        <Image
          src={`${ICONS_BASE_URL}${device.icon.id}_257x257.png`}
          width={256}
          height={256}
          alt={device.product.name}
          className="object-cover w-48 h-48 md:w-64 md:h-64"
        />

        <div className="mx-5 mt-5 md:mt-0 md:ml-8">
          {data
            .filter(({ value }) => !!value)
            .map(({ label, value }) => {
              return (
                <div
                  key={label}
                  className="flex justify-between md:w-[400px] border-b border-b-ubiquiti-neutral-3 py-2"
                >
                  <span className="text-ubiquiti-dark text-sm leading-6">
                    {label}
                  </span>
                  <span className="text-ubiquiti-dark text-sm leading-6">
                    {value}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export { DeviceModal };
