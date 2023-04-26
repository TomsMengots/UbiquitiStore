import { UCloseIcon } from "./UCloseIcon";
import { USearchIcon } from "./USearchIcon";

interface IProps {
  value: string;
  onUpdate: Function;
  onClear: Function;
}

const UInput = ({ value, onUpdate, onClear }: IProps) => {
  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(event);
  };

  return (
    <div className="relative w-full md:max-w-[344px]">
      <label
        htmlFor="search"
        className="absolute top-0 left-2 h-full flex items-center"
      >
        <USearchIcon />
      </label>
      <input
        id="search"
        type="text"
        value={value}
        placeholder="Search"
        className="w-full h-8 bg-ubiqiti-neutral-1 text-ubiqiti-black-85 rounded py-1.5 px-8 outline-none caret-ubiqiti-blue text-sm leading-6"
        onChange={updateInput}
      />
      <button
        type="button"
        className="absolute top-0 right-2 h-full flex items-center outline-none"
        onClick={() => onClear()}
      >
        <UCloseIcon />
      </button>
    </div>
  );
};

export { UInput };
