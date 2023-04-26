import Image from "next/image";
import { useState } from "react";
import { ActiveViewType, IFilters } from "~/core/types/Filters";
import { UCloseIcon } from "~/components/common/UCloseIcon";
import { UInput } from "./common/UInput";
import { UContextCard } from "./common/UContextCard";

interface IProps {
  updateFilters: Function;
  productChoices: string[];
  filters: IFilters;
}

const Filters = ({ filters, productChoices, updateFilters }: IProps) => {
  const [isContextCardOpen, setIsContextCardOpen] = useState(false);
  const updateSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters({
      search: target.value,
    });
  };
  const updateSelectedTypes = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const updatedList = filters.types.includes(target.value)
      ? filters.types.filter((choice) => choice !== target.value)
      : [...filters.types, target.value];

    updateFilters({
      types: updatedList,
    });
  };

  const clearSearch = () => {
    updateFilters({
      search: "",
    });
  };

  const updateView = (selectedView: ActiveViewType) => {
    if (selectedView === filters.view) {
      return;
    }

    updateFilters({ view: selectedView });
  };

  const listIconPath =
    filters.view === ActiveViewType.LIST
      ? "/icons/list_active.svg"
      : "/icons/list_default.svg";

  const gridIconPath =
    filters.view === ActiveViewType.GRID
      ? "/icons/grid_active.svg"
      : "/icons/grid_default.svg";

  return (
    <div className="flex justify-center border-b border-b-ubiquiti-neutral-3">
      <div className="relative flex flex-col md:flex-row md:items-center justify-between py-2 px-5 md:pr-7 xl:pr-0 w-full xl:max-w-[1308px]">
        <UInput
          value={filters.search}
          onUpdate={updateSearch}
          onClear={clearSearch}
        />

        <div className="flex justify-end mt-2 md:mt-0 relative h-10 md:h-auto md:static">
          <button
            type="button"
            className="outline-none mr-4 flex-shrink-0"
            onClick={() => updateView(ActiveViewType.LIST)}
          >
            <Image src={listIconPath} alt="List icon" height={20} width={20} />
          </button>
          <button
            type="button"
            className="outline-none mr-4 flex-shrink-0"
            onClick={() => updateView(ActiveViewType.GRID)}
          >
            <Image src={gridIconPath} alt="Grid icon" height={20} width={20} />
          </button>
          <button
            type="button"
            className="text-sm leading-6 text-ubiquiti-black-45 outline-none"
            onClick={() => setIsContextCardOpen(true)}
          >
            Filter
          </button>

          {isContextCardOpen && (
            <div className="max-w-[256px] w-full absolute right-0 top-0 bg-white z-10 shadow-ubiquiti">
              <div className="border-b border-b-ubiquiti-neutral-3 px-6 py-3 flex items-center justify-between">
                <p className="text-ubiquiti-dark text-sm leading-6 cursor-default">
                  Filter
                </p>
                <button
                  type="button"
                  className="outline-none flex-shrink-0"
                  onClick={() => setIsContextCardOpen(false)}
                >
                  <UCloseIcon />
                </button>
              </div>

              <UContextCard
                choices={productChoices}
                selected={filters.types}
                onUpdate={updateSelectedTypes}
                title="Product line"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Filters };
