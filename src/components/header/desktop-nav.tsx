"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { AboutData } from "@/components/header/aboutData";
import { widApi } from "@/app/work-in-dihlabeng/_components/wid-api";

export function DesktopNav() {
  return (
    <NavigationMenu className={"hidden lg:flex z-20 capitalize"}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-4 w-[400px] gap-3">
              {AboutData.map((component) => (
                <Link
                  key={component.title}
                  href={component.link}
                >
                  {component.title}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-4 w-[400px] gap-3">
              {AboutData.map((component) => (
                <Link
                  key={component.title}
                  href={component.link}
                >
                  {component.title}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Work In Dihlabeng</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-4 w-[400px] gap-3">
              {widApi.map((component) => (
                <Link
                  key={component.title}
                  href={component.link}
                >
                  {component.title}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/jol-in-dihlabeng" legacyBehavior passHref>
            Jol in Dihlabeng
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Key Documents</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-4 w-[400px] gap-3">
              {AboutData.map((component) => (
                <Link
                  key={component.title}
                  href={component.link}
                >
                  {component.title}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/media" legacyBehavior passHref>
            Media
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
