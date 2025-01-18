import { MenuItems } from "@/components/menu-items";
import { TypographyH3 } from "@/components/Typography";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Council = () => {
    const data = [
        {
            title: "Speaker",
            link: "council/speaker",
            img: "/img/council/Council-Speaker-Cllr-Nthabeleng-Mofokeng.webp",
        },
        {
            title: "Single Whip",
            link: "council/chief-whip",
            img: "/img/council/mosalla_mokotla.webp",
        },
        {
            title: "Municipal Council",
            link: "council/municipal-council",
            img: "/img/townhall.webp",
        },
    ];

    return (
        <>
            <MenuItems data={data} />
        </>
    );
};

export default Council;
