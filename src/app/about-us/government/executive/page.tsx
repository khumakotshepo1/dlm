import { MenuItems } from "@/components/menu-items";

const Executive = () => {

    const data = [
        {
            title: "Mayco",
            link: "executive/mayco",
            img: "/img/townhall.webp",
        },
        {
            title: "Office of the Mayor",
            link: "executive/office-of-the-mayor",
            img: "/img/council/Cllr-Tseki-Tseki-Ward-14-ANC_11zon.webp",
        },
    ];

    return <MenuItems data={data} />;
};

export default Executive;
