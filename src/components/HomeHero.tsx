import Link from "next/link";
import { Button } from "./ui/button";

const HomeHero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background image with blur */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dlm_hq-hero bg-no-repeat bg-cover" />
        {/* This div can be used for additional overlay effects if needed */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 w-full h-full py-28 text-center bg-gray-300/50 dark:bg-slate-800/70 backdrop-blur-sm">
        <>
          <h1 className="text-2xl xl:text-6xl font-bold tracking-wider bg-gradient-to-r from-blue-800 via-green-600 to-orange-400 text-transparent bg-clip-text">
            Welcome to our Local Municipality.
          </h1>
          <p className="text-lg xl:text-2xl font-semibold">
            Explore opportunities and scrutinize our service level agreement
          </p>
        </>
        <Link href={"/about-us/about-dihlabeng"}>
          <Button>Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
