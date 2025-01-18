import Link from "next/link";
import Image from "next/image"; // Import Image from next/image
import { Card } from "./ui/card";
import { TypographyH3 } from "./Typography";

interface MenuItem {
  title: string;
  link: string;
  img: string; // Path to the image (can be local or remote)
}

interface MenuItemsProps {
  data: MenuItem[];
}

export const MenuItems = ({ data }: MenuItemsProps) => {

  console.log(data);

  return (
    <section>
      <article className="flex flex-col md:flex-row justify-center items-center gap-4 py-12">
        {data.map((item) => (
          <Link href={item.link} target="_blank" key={item.title}>
            <Card
              className="relative h-96 w-72 transition-all transform hover:scale-110 hover:shadow-lg"
            >
              {/* Image Section */}
              <Image
                src={item.img}
                alt={item.title}
                fill // Makes the image cover the parent container
                objectFit="cover" // Ensures the image maintains its aspect ratio while covering
                className="rounded-lg" // Optional: Adjust based on your design
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/60 to-transparent" />
              {/* Title Section */}
              <TypographyH3 className="absolute bottom-0 left-0 z-20 w-full px-2 py-4 bg-background/90">
                {item.title}
              </TypographyH3>
            </Card>
          </Link>
        ))}
      </article>
    </section>
  );
};
