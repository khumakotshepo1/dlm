import StayApi from "@/components/StayApi";
import Image from "next/image";
import Link from "next/link";

const Stay = () => {
  return (
    <article className="flex flex-col xl:flex-row gap-10 justify-start items-center w-full px-3 py-6">
      <div className="h-48 w-60 rounded-full flex flex-col justify-center items-center border-2">
        <p className="font-semibold text-base">Dihlabeng</p>
        <h1 className="text-green-600 font-Caveat-brush text-3xl font-bold">
          Where To Stay
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:flex justify-center items-center gap-8 md:gap-4">
        {StayApi.slice(0, 4).map((stay) => (
          <Link
            href={stay.link}
            target={stay.target}
            key={stay.name}
            className="flex flex-col justify-center items-center gap-2 mx-4"
          >
            <div className="py-24 px-28 relative">
              <Image
                src={stay.img}
                alt={stay.name}
                fill
                className="absolute rounded-md"
              />
            </div>
            <h1 className="font-semibold">{stay.name}</h1>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Stay;
