import { MenuItems } from "@/components/menu-items";
import { GovernmentData } from "@/components/GovernmentData";
import Link from "next/link";
import { Card } from "@/components/ui/card";


const Government = () => {

    const data = [
        {
            title: "Executive",
            link: "government/executive",
            img: "/img/townhall.webp",
        },
        {
            title: "Council",
            link: "government/council",
            img: "/img/townhall.webp",
        },
        {
            title: "Administration",
            link: "government/administration",
            img: "/img/dihlabeng_hq.webp",
        },
    ];

    return (
        <>
            <MenuItems data={data} />
        </>
    )
};

export default Government;
