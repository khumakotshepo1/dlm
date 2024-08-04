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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { AboutData } from "@/components/header/aboutData";
import { widApi } from "@/app/work-in-dihlabeng/_components/wid-api";

export function DesktopNav() {
  return (
    <NavigationMenu className={"hidden lg:flex z-20"}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-4 w-[400px] gap-3">
              {AboutData.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.link}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-4 w-[400px] gap-3">
              {AboutData.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.link}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Work In Dihlabeng</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-4 w-[400px] gap-3">
              {widApi.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.link}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/jol-in-dihlabeng" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Jol in Dihlabeng
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Key Documents</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-4 w-[400px] gap-3">
              {AboutData.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.link}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/media" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Media
            </NavigationMenuLink>
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
