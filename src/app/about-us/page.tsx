import { MenuItems } from "@/components/menu-items";
import AboutData from "@/components/AboutData";


const AboutUs = () => {

  const data = [
    {
      title: "About Dihlabeng",
      link: "about-us/about-dihlabeng",
      img: "/img/townhall.webp",
    },
    {
      title: "Government",
      link: "about-us/government",
      img: "/img/logo-1.webp",
    },
    {
      title: "Mission",
      link: "about-us/mission",
      img: "/img/logo-1.webp",
    },
  ];

  return <MenuItems data={data} />;
};

export default AboutUs;
