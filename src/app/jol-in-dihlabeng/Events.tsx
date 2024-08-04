import EventsApi from "@/components/EventsApi";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
  return (
    <article className="flex flex-col xl:flex-row gap-10 justify-start items-center w-full px-3 py-6">
      <div className="h-48 w-60 rounded-full flex flex-col justify-center items-center border-2">
        <p className="font-semibold text-base">Dihlabeng</p>
        <h1 className="text-green-600 font-Caveat-brush text-4xl font-bold">
          Events
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:flex justify-center items-center gap-8 md:gap-4">
        {EventsApi.slice(0, 4).map((event) => (
          <Link
            href={event.link}
            target={event.target}
            key={event.name}
            className="flex flex-col justify-center items-center gap-2 mx-4"
          >
            <div className="py-24 px-28 relative">
              <Image
                src={event.img}
                alt={event.name}
                fill
                className="absolute rounded-md"
              />
            </div>
            <h1 className="font-semibold">{event.name}</h1>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Events;
