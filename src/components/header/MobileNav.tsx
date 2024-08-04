"use client";

import Link from "next/link";

import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { NavLinksData } from "@/components/header/NavLinksData";
import { Menu, X } from "lucide-react";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  let menu;

  if (openMenu) {
    menu = (
      <div className="p-3 bg-white dark:bg-black h-screen fixed top-0 left-0 w-full z-40 lg:hidden">
        <X
          onClick={() => setOpenMenu(!openMenu)}
          className="absolute  top-8 right-3 w-10 h-10 cursor-pointer"
        />
        <ul className="flex flex-col gap-2 pt-12 pl-10 ">
          {NavLinksData?.map((links) => (
            <li key={links.title} className="uppercase my-2 w-1/2 p-2">
              <Link onClick={() => setOpenMenu(false)} href={links.link}>
                {links.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <Menu
        onClick={() => setOpenMenu(!openMenu)}
        className="w-10 h-10 cursor-pointer lg:hidden"
      />
      {menu}
    </>
  );
};

export default MobileNav;
