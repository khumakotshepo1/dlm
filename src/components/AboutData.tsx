import {
  IoIosInformationCircle,
  IoIosRibbon,
  IoIosMap,
  IoIosHelp,
} from "react-icons/io";

const AboutData = [
  {
    title: "About Dihlabeng",
    link: "about-us/about-dihlabeng",
    img: <IoIosInformationCircle />,
    act: "_self",
  },
  {
    title: "Government",
    link: "about-us/government",
    img: <IoIosRibbon />,
    act: "_self",
  },
  {
    title: "Mission",
    link: "about-us/mission",
    img: <IoIosMap />,
    act: "_self",
  },
  {
    title: "Who is your councillor",
    link: "https://www.elections.org.za/pw/Voter/Who-Is-My-Ward-Councillor",
    img: <IoIosHelp />,
    act: "_blank",
  },
];

export default AboutData;
