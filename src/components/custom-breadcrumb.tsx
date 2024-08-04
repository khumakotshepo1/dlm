"use client";

import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {usePathname} from "next/navigation";
import {Fragment} from "react";
import Link from "next/link";

export function CustomBreadcrumb() {
    const path = usePathname();
    const pathNames = path?.split("/").filter((path) => path);

    return (
        <section className="w-full">
            <Breadcrumb>
                <BreadcrumbList className="text-xs md:text-sm lg:text-base w-full">
                    {pathNames.map((link, index) => {
                        const href = `/${pathNames.slice(0, index + 1).join("/")}`;
                        const linkName = link[0] + link.slice(1).replace("-", " ");
                        const isLastPage = pathNames.length === index + 1;

                        return (
                            <Fragment key={`${link}-${index}`}>
                                {!isLastPage ? (
                                    <BreadcrumbPage>
                                        <Link href={href} className="capitalize">
                                            {linkName}
                                        </Link>
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbPage className="capitalize font-black">
                                        {linkName}
                                    </BreadcrumbPage>
                                )}
                                {!isLastPage && <BreadcrumbSeparator/>}
                            </Fragment>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </section>
    );
}