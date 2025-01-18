
import Link from "next/link";
import { Button } from "./ui/button";

const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image with a gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dlm_hq-hero bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen px-4 text-center md:px-8 bg-gray-100/60 dark:bg-black/70 backdrop-blur-md">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-wide  text-foreground">
          Welcome to Our Local Municipality
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl font-medium text-gray-700 dark:text-gray-300">
          Explore opportunities and scrutinize our service-level agreement.
        </p>
        <Link href="/about-us/about-dihlabeng" passHref>
          <Button className="mt-6 px-6 py-3 text-sm sm:text-base lg:text-lg">
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;
