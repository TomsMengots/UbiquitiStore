import Image from "next/image";

interface IProps {
  title: string;
  description: string;
  isError?: boolean;
}

const UEmptyState = ({ title, description, isError = false }: IProps) => {
  return (
    <section className="h-96 w-full flex flex-col items-center justify-center">
      {isError && (
        <Image
          src="/not_found.png"
          alt="Not Found Doodle"
          height={420}
          width={320}
          className="object-cover"
        />
      )}
      <h2 className="text-2xl font-bold text-ubiquiti-dark mb-2">{title}</h2>
      <p className="text-lg text-ubiquiti-black-45">{description}</p>
    </section>
  );
};

export { UEmptyState };
