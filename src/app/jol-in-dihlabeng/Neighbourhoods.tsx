import TownsApi from "@/components/TownsApi";
import Image from "next/image";
import Link from "next/link";

const Neighbourhoods = () => {
  return (
    <article className="flex flex-col xl:flex-row gap-10 justify-start items-center w-full px-3 py-6">
      <div className="h-48 w-60 rounded-full flex flex-col justify-center items-center border-2">
        <p className="font-semibold text-base">Dihlabeng</p>
        <h1 className="text-green-600 font-Caveat-brush text-3xl font-bold">
          Neighbourhoods
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:flex justify-center items-center gap-8 md:gap-4">
        {TownsApi.slice(0, 4).map((town) => (
          <Link
            href={town.link}
            target={town.target}
            key={town.name}
            className="flex flex-col justify-center items-center gap-2 mx-4"
          >
            <div className="py-24 px-28 relative">
              <Image
                src={town.img}
                alt={town.name}
                fill
                className="absolute rounded-md"
              />
            </div>
            <h1 className="font-semibold">{town.name}</h1>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Neighbourhoods;
