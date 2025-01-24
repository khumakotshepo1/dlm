import Link from "next/link";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
  FaMailchimp,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 justify-center items-center">
      <ul className="flex justify-center items-center text-2xl p-3 gap-4 ">
        <li>
          <Link
            href="https://www.facebook.com/dihlabeng?_rdc=1&_rdr"
            target="_blank"
          >
            <FaFacebook className="hover:text-gray-800" />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/dihlabengm?lang=en" target="_blank">
            <FaXTwitter className="hover:text-gray-800" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/@dihlabenglocalmunicipality8968"
            target="_blank"
          >
            <FaYoutube className="hover:text-gray-800" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/dihlabeng_local_municipality/"
            target="_blank"
          >
            <FaInstagram className="hover:text-gray-800" />
          </Link>
        </li>
      </ul>
      <article className="flex flex-col md:flex-row gap-3 justify-between items-center">
        <div className="flex gap-3 justify-center items-center">
          <FaLocationDot className="hidden lg:block" />
          <p> 9 Muller Street, Bethlehem, 9700</p>
        </div>
        <div className="bg-gray-600 w-0.5 h-5 hidden lg:block"></div>
        <div className="flex gap-3 justify-center items-center">
          <FaMailchimp className="hidden lg:block" />
          <p>PO Box 551, Bethlehem, 9700</p>
        </div>
      </article>
      <p className="text-center p-3 text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Dihlabeng Local Municipality
      </p>
    </footer>
  );
};

export default Footer;
