type HeroSectionTypes = {
  image: string;
  title: string;
  description: string;
};

export const HeroSection = ({
  image,
  title,
  description,
}: HeroSectionTypes) => {
  return (
    <section
      className={`flex flex-col justify-center items-center h-[800px] p-6 bg-[${image}] bg-no-repeat bg-cover relative bg-top `}
    >
      <div className="text-white z-10 bg-black opacity-80 shadow-lg shadow-black">
        <h1 className="text-center capitalize text-3xl font-bold p-3">
          {title}
        </h1>
        <p className="text-center capitalize text-lg font-bold py-3 px-6 my-6">
          {description}
        </p>
      </div>
    </section>
  );
};
