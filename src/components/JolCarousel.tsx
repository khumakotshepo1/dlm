import * as React from "react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"
import { TypographyP } from "@/components/Typography"

interface Props {
  name: string
  img: string
  link: string
}

export function JolCarousel({ data }: { data: Props[] }) {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {data.map((d) => (
          <CarouselItem key={d.name} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Link
                href={d.link}
                className="flex flex-col items-center gap-3 text-center group"
              >
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={d.img}
                      alt={`Image of ${d.name}`}
                      fill
                      objectFit="cover"
                      className="rounded-md"
                    />

                  </CardContent>
                  <CardFooter>
                    <TypographyP>
                      {d.name}
                    </TypographyP>
                  </CardFooter>
                </Card>
              </Link>

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
