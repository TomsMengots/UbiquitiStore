interface IProps {
  choices: string[];
  selected: string[];
  title: string;
  onUpdate: Function;
}

const UContextCard = ({ choices, selected, title, onUpdate }: IProps) => {
  const onChoiceUpdated = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(event);
  };

  return (
    <div className="flex flex-col h-72 pt-5 pb-8 px-4">
      <h6 className="text-ubiqiti-black-85 text-sm font-bold leading-6 mb-5">
        {title}
      </h6>

      <div className="overflow-y-auto">
        {choices.length &&
          choices.map((choice: string) => {
            return (
              <label
                htmlFor={choice}
                key={choice}
                className="flex items-center cursor-pointer hover:bg-ubiqiti-neutral-2 transition duration-200 ease-linear px-2"
              >
                <input
                  id={choice}
                  type="checkbox"
                  className="h-4 w-4 mr-2"
                  value={choice}
                  checked={selected.includes(choice)}
                  onChange={onChoiceUpdated}
                />

                <span className="block text-ubiqiti-dark">{choice}</span>
              </label>
            );
          })}
      </div>
    </div>
  );
};

export { UContextCard };
