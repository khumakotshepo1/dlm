import HomeHero from "@/components/HomeHero";
import Loadshedding from "@/components/Loadshedding";
import { Suspense } from "react";

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Loadshedding />
      </Suspense>
      <HomeHero />
    </>
  );
};

export default Home;
