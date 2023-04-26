import Image from "next/image";
import { ICONS_BASE_URL } from "~/core/configs/AppConfig";
import { IDeviceModel } from "~/core/types/Devices";

interface IProps {
  item: IDeviceModel;
}

const DeviceTableItem = ({ item }: IProps) => {
  return (
    <div
      key={item.id}
      className="grid grid-cols-12 md:gap-4 md:py-1 border md:border-t-0 md:border-x-0 md:border-b border-ubiquiti-neutral-3 rounded md:rounded-none w-auto mb-5 md:mb-0 hover:bg-ubiquiti-neutral-2 transition duration-200 ease-linear cursor-pointer"
    >
      <div className="col-span-12 md:col-span-2 lg:col-span-1 flex items-center justify-between md:justify-center border-b md:border-b-0 px-4 py-3 md:p-0">
        <h4 className="text-ubiquiti-dark text-xs md:hidden font-bold">
          Device Image
        </h4>
        <Image
          src={`${ICONS_BASE_URL}${item.icon.id}_25x25.png`}
          width={24}
          height={24}
          alt={item.product.name}
          className="h-6 w-6 object-cover"
        />
      </div>
      <div className="col-span-12 md:col-span-3 flex items-center md:block justify-between text-sm leading-6 border-b md:border-b-0 px-4 py-3 md:p-0">
        <h4 className="text-ubiquiti-dark text-xs md:hidden font-bold">
          Product Line
        </h4>
        <p className="text-ubiquiti-dark text-left">{item.line.name}</p>
      </div>
      <div className="col-span-12 md:col-span-7 lg:col-span-8 flex items-center md:block justify-between text-sm leading-6 px-4 py-3 md:p-0">
        <h4 className="text-ubiquiti-dark text-xs md:hidden font-bold">Name</h4>
        <p className="text-ubiquiti-dark text-left">{item.product.name}</p>
      </div>
    </div>
  );
};

export { DeviceTableItem };
