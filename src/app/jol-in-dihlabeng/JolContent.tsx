
import Link from "next/link";
import Image from "next/image";
import { TypographyH2, TypographyH3, TypographyH4, TypographyP } from "@/components/Typography";

interface DataProps {
  name: string;
  link: string;
  target: string;
  img: string;
}

interface JolContentProps {
  title: string;
  data: DataProps[];
}

export function JolContent({ title, data }: JolContentProps) {
  return (
    <article className="flex flex-col xl:flex-row gap-8 justify-start items-center w-full px-6 py-8">
      {/* Title Section */}
      <div className="relative flex flex-col items-center justify-center h-48 w-64 rounded-full bg-fuchsia-50">
        {/* Decorative Clipart */}
        <div className="absolute -top-6 -left-6 w-16 h-16">
          <Image
            src="/img/sunny.svg"
            alt="Decorative Clipart"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        {/* Title Content */}
        <p className="text-base font-semibold text-gray-700">Dihlabeng</p>
        <h1 className="text-3xl font-bold text-green-600 font-[Caveat]">{title}</h1>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex gap-12">
        {data.slice(0, 4).map(({ name, link, target, img }) => (
          <Link
            href={link}
            target={target}
            key={name}
            className="flex flex-col gap-3"
          >
            <div className="relative w-44 h-32 rounded-md overflow-hidden shadow-md group-hover:scale-105 transform transition">
              <Image
                src={img}
                alt={`Image of ${name}`}
                fill
                objectFit="cover"
                className="rounded-md"
              />
              <TypographyP className="bg-background absolute bottom-0 left-0 w-full text-sm">
                {name}
              </TypographyP>

            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
