import TownsApi from "@/components/TownsApi";
import { JolContent } from "./JolContent";
import JolHero from "./JolHero";
import EventsApi from "@/components/EventsApi";
import StayApi from "@/components/StayApi";

const JolInDihlabeng = () => {
  return (
    <>
      <JolHero />

      <section className="flex flex-col justify-center items-center gap-3 px-2 py-6">
        <JolContent title="Neighbourhoods" data={TownsApi} />
        <JolContent title="Events" data={EventsApi} />
        <JolContent title="Stay" data={StayApi} />
      </section>
    </>
  );
};

export default JolInDihlabeng;
