import Link from "next/link";
import { Card } from "./ui/card";

export const MenuItems = ({ data }: any) => {
  return (
    <section className="py-2 flex flex-col gap-4 items-center">
      {data?.map((d: any) => (
        <Link key={d.title} href={d.link} target={d.act}>
          <Card className="flex gap-4 w-96 justify-start items-center p-3 border-2 text-xl">
            {d.img}
            {d.title}
          </Card>
        </Link>
      ))}
    </section>
  );
};
