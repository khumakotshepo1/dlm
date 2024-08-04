import Image from "next/image";
import CouncillorsData from "@/components/CouncillorsData";

const Councillors = () => {
    return (
        <article className="flex flex-wrap gap-8 justify-center items-center my-24 px-3 py-6 mx-auto">
            {CouncillorsData.map((councillor) => (
                <figure
                    key={councillor.ward}
                    className="p-3 flex flex-col justify-center items-center"
                >
                    <h2 className="text-xl uppercase px-3 py-6 dark:text-gray-100 font-bold">
                        {councillor.ward}
                    </h2>
                    <span className="flex justify-center items-center relative h-60 w-60">
            <Image
                className="absolute rounded-full px-6 py-1"
                src={councillor.img}
                alt={councillor.name}
                fill
            />
          </span>

                    <h3 className="text-lg text-blue-900 dark:text-gray-200">
                        {councillor.name}
                    </h3>
                    <figcaption className="text-sm text-gray-400 uppercase">
                        {councillor.party}
                    </figcaption>
                </figure>
            ))}
        </article>
    );
};

export default Councillors;
