import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AfricanWebsite from "../_assert/african website.png";
import Ecommerce from "../_assert/ecommerce-website.jpg";
import ReactnativeApp from "../_assert/react native app.png";
import Restaurantwebsite from "../_assert/restaurant-wordpress-themes1.jpg";
import Sass from "../_assert/sass website.png";

export function CarouselSize() {
  const imageArray: any = [
    Restaurantwebsite,
    Sass,
    AfricanWebsite,
    Ecommerce,
    ReactnativeApp,
  ];
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="lg:w-full lg:max-w-[1200px] overflow-hidden "
    >
      <CarouselContent>
        {imageArray.map((item: any, index: any) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
            <div className="p-1 ">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <Image
                    src={item}
                    width={340}
                    height={340}
                    alt="website Image"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
