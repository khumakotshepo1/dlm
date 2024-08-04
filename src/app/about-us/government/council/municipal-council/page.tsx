import Councillors from "./Councillors";

const MunicipalCouncil = () => {
  return (
    <section>
      <article className="py-6">
        <h1 className="text-center capitalize text-3xl font-bold p-3 border-b-blue-300 dark:border-b-gray-400 border-b-4">
          Ward Councillors
        </h1>
        <Councillors />
      </article>
    </section>
  );
};

export default MunicipalCouncil;
