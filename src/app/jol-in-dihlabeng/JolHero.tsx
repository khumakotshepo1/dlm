import Image from "next/image";
import Weather from "./Weather";

const JolHero = () => {
  return (
    <section className="px-6 py-40 bg-jol-hero bg-no-repeat bg-cover">
      <article className="flex flex-col xl:flex-row justify-between items-center xl:items-start p-3">
        <div className="z-20 w-40 text-white flex flex-col justify-around items-center gap-3 p-6">
          <h1 className="text-xl p-3 bg-gray-900 w-full text-center">
            Tourism
          </h1>
          <div className="flex flex-col items-center justify-center gap-2 bg-gray-900 w-full p-3 rounded-b-xl">
            <div className="w-20 h-20 relative">
              <Image
                src="/img/logo-1.webp"
                alt="Logo"
                fill
                className="absolute"
              />
            </div>
            <h2 className="text-xl font-bold">Dihlabeng</h2>
            <p className="text-orange-400 font-Caveat-brush">You begin here</p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-4 p-3 items-center text-white z-20 bg-gray-700 opacity-90">
          <div className="p-3 flex flex-col gap-3">
            <h1 className="text-2xl lg:text-4xl xl:text-6xl">
              Discover Dihlabeng
            </h1>
            <p className="text-green-500 text-lg xl:text-4xl font-Caveat-brush tracking-wider">
              #Bethlehem #Clarens #Fouriesburg #Paul Roux #Rosendal
            </p>
          </div>
          <div className="xl:w-0.5 xl:h-28 bg-white"></div>
          <Weather />
        </div>
      </article>
    </section>
  );
};

export default JolHero;
