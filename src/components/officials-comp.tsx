import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

type OCTypes = {
  name: string;
  title: string;
  message: string;
  email: string;
  tel: string;
  fbLink: string;
  xLink: string;
  llink: string;
  image: string;
};

const OfficialsComp = ({
  name,
  title,
  message,
  email,
  tel,
  fbLink,
  xLink,
  llink,
  image,
}: OCTypes) => {
  return (
    <section className="w-full xl:w-3/4 mx-auto h-full flex flex-col justify-center py-6 md:p-6 items-center lg:flex-row">
      <Image
        src={image}
        alt={`Image of ${name}`}
        width={700}
        height={1200}
        className="w-4/5 h-auto max-w-[450px] rounded-xl"
      />

      <div className="w-full h-full md:p-12">
        <h1 className="text-5xl lg:text-start text-center p-2 font-bold">
          Cllr {name}
        </h1>
        <h2 className="text-2xl text-center p-2 font-bold lg:text-start">
          {title}
        </h2>

        <div className="flex flex-col justify-center items-start">
          <p className="p-3 my-3 text-left">{message}</p>
          <h3 className="flex justify-center lg:justify-start items-center py-2 text-lg">
            <Mail className="mx-3" />
            {email}
          </h3>
          <h3 className="flex justify-center lg:justify-start items-center py-2 text-lg">
            <Phone className="mx-3" />
            {tel}
          </h3>

        </div>

        <ul className="flex justify-center items-center text-xl py-12 gap-4 lg:justify-start">
          <li>
            <Link href={fbLink}>
              <Facebook className="hover:text-gray-800" />
            </Link>
          </li>
          <li>
            <Link href={xLink}>
              <Twitter className="hover:text-gray-800" />
            </Link>
          </li>
          <li>
            <Link href={llink}>
              <Linkedin className="hover:text-gray-800" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OfficialsComp;
