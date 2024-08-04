import Link from "next/link";
import MayorData from "@/components/MayorData";

const MoreOfMayor = () => {
  return (
    <article className=" shadow-lg my-12">
      <h1 className="text-center p-6 bg-gray-200 dark:bg-gray-600 font-bold text-2xl">
        More From the Mayor&lsquo;s Office
      </h1>
      <div className="flex flex-wrap justify-center items-center py-12">
        {MayorData.map((mayor) => (
          <Link
            href={mayor.link}
            key={mayor.title}
            className="border-2 hover:bg-gray-200 dark:hover:bg-gray-600 font-semibold hover:text-gray-400 dark:hover:text-white shadow-lg m-2 w-40 h-40 rounded-full flex justify-center items-center"
          >
            <Link href={mayor.link}>{mayor.title}</Link>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default MoreOfMayor;
