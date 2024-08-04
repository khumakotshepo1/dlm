import Events from "./Events";
import JolHero from "./JolHero";
import Neighbourhoods from "./Neighbourhoods";
import Stay from "./Stay";

const JolInDihlabeng = () => {
  return (
    <>
      <JolHero />

      <section className="flex flex-col justify-center items-center gap-3 px-2 py-6">
        <Neighbourhoods />
        <Events />
        <Stay />
      </section>
    </>
  );
};

export default JolInDihlabeng;
