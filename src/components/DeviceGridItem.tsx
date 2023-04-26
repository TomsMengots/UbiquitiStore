import Image from "next/image";
import { ICONS_BASE_URL } from "~/core/configs/AppConfig";
import { IDeviceModel } from "~/core/types/Devices";

interface IProps {
  item: IDeviceModel;
}

const DeviceGridItem = ({ item }: IProps) => {
  return (
    <div className="rounded border border-ubiqiti-neutral-3 overflow-hidden">
      <div className="bg-ubiqiti-neutral-1 flex items-center justify-center">
        <Image
          src={`${ICONS_BASE_URL}${item.icon.id}_257x257.png`}
          width={256}
          height={256}
          alt={item.product.name}
          className="object-contain max-h-32"
        />
      </div>

      <div className="p-3 w-full text-left">
        <p
          title={item.product.name}
          className="text-sm leading-6 text-ubiqiti-dark overflow-hidden whitespace-nowrap text-ellipsis w-full"
        >
          {item.product.name}
        </p>
        <p
          title={item.line.name}
          className="text-xs leading-5 text-ubiqiti-black-45 overflow-hidden whitespace-nowrap text-ellipsis w-full"
        >
          {item.line.name}
        </p>
      </div>
    </div>
  );
};

export { DeviceGridItem };
