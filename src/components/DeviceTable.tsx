import { DeviceTableItem } from "~/components/DeviceTableItem";
import { IDeviceModel } from "~/core/types/Devices";

interface IProps {
  devices: IDeviceModel[];
  onSelectDevice: Function;
}

const DeviceTable = ({ devices, onSelectDevice }: IProps) => {
  const selectDevice = (device: IDeviceModel) => {
    onSelectDevice(device);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full px-4 pt-5 md:pl-20 md:pt-6 md:pr-6 md:max-w-[1262px]">
        <div className="hidden md:grid grid-cols-12 gap-4 w-full py-1 border-b border-b-ubiquiti-neutral-3">
          <div className="md:col-span-2 lg:col-span-1 text-center text-xs leading-6 text-ubiquiti-neutral-4">
            {devices.length} devices
          </div>
          <div className="md:col-span-3 uppercase text-sm leading-6 text-ubiquiti-dark font-bold">
            Product Line
          </div>
          <div className="md:col-span-7 lg:col-span-8 uppercase text-sm leading-6 text-ubiquiti-dark font-bold">
            Name
          </div>
        </div>

        {devices.map((device) => (
          <button
            key={device.id}
            type="button"
            className="outline-none w-full"
            onClick={() => selectDevice(device)}
          >
            <DeviceTableItem item={device} />
          </button>
        ))}
      </div>
    </div>
  );
};

export { DeviceTable };
