const Mission = () => {
  return (
    <>
      <h1 className="text-center p-3 font-bold text-2xl">
        Our Mission & Vision
      </h1>
      <section className="grid grid-cols-1 basis-3 lg:grid-cols-2 xl:w-[60%] mx-auto">
        <article className="p-6">
          <h2 className="rounded-full p-6 text-gray-100 bg-gradient-to-b from-sky-400 to-gray-600 text-center font-bold">
            Mission
          </h2>
          <div className="p-3">
            <h3 className="font-semibold my-4">
              The Municipality of Dihlabeng commits itself to:
            </h3>
            <ul className="text-gray-400 list-disc">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                aperiam.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam repudiandae aut perspiciatis numquam quia
                exercitationem.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                veniam facere recusandae!
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias, ipsam.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati soluta veritatis laborum accusamus.
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae, officiis?
              </li>
            </ul>
          </div>
        </article>
        <article className="p-6">
          <h2 className="rounded-full p-6 text-gray-100 bg-gradient-to-b from-red-400 to-gray-600 text-center font-bold">
            Vision
          </h2>
          <div className="p-3">
            <p className="my-4 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              amet ipsa fuga explicabo blanditiis molestias atque natus
              doloremque quae fugiat, quas incidunt vero ullam, temporibus
              commodi quibusdam cupiditate dignissimos id officiis delectus
              omnis. Facere, enim quae. Iste necessitatibus asperiores qui?
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Mission;
