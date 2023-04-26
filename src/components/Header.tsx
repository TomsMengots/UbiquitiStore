import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full flex h-14 border-b border-b-ubiqiti-neutral-3 bg-ubiqiti-neutral-1">
      <Image
        src="/ubiquiti_logo.svg"
        alt="Ubiquiti logo"
        width={55}
        height={55}
        className="m-0"
      />

      <div className="flex justify-center w-full">
        <div className="flex items-center justify-between  w-full xl:max-w-[1264px] ml-4 mr-7">
          <h2 className="text-ubiqiti-neutral-2 text-xl leading-7">Devices</h2>
          <h5 className="text-sm leading-6">Toms Mengots</h5>
        </div>
      </div>
    </header>
  );
};

export { Header };
