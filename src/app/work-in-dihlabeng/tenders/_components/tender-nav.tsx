"use client";

import Link from "next/link";
import { tenderNavApi } from "./tender-nav-api";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const TenderNav = () => {
  const path = usePathname();

  return (
    <nav className="flex gap-4 border-b-2 border-gray-200">
      {tenderNavApi.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          className={cn("py-2 px-4 border-2", {
            "border-blue-600 text-blue-600": path === item.url,
            "border-transparent text-gray-500": path !== item.url,
          })}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
