import { MenuItems } from "@/components/menu-items";

const Council = () => {
    const data = [
        {
            title: "Speaker",
            link: "council/speaker",
            img: "/img/council/Council-Speaker-Cllr-Nthabeleng-Mofokeng.webp",
        },
        {
            title: "Single Whip",
            link: "council/council-whip",
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
