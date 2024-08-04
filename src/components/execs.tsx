import Image from "next/image";
import Link from "next/link";

export const Execs = ({ data, title }: any) => {
  return (
    <article className="px-3 p-6">
      <h1 className="font-bold text-3xl text-center p-6 border-b-teal-400 dark:border-b-gray-400 border-b-4">
        {title}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-12">
        {data.map((exec: any) => (
          <Link
            href={exec.link}
            key={exec.name}
            className="flex flex-col justify-center items-center p-3 shadow-lg"
          >
            <div className="w-40 h-60 relative hover:border-2 transition-all ease-in0 rounded-full">
              <Image
                src={exec.img}
                alt={exec.name}
                fill
                className="absolute rounded-full"
              />
            </div>
            <h1 className="my-6 font-bold text-xl">{exec.name}</h1>
            <h2 className="text-teal-600 dark:text-gray-400 text-lg font-medium text-center">
              {exec.dept}
            </h2>
          </Link>
        ))}
      </div>
    </article>
  );
};
