"use client";

import { Coffee } from "@/interfaces/Coffee";
import Image from "next/image";
import React, { useEffect } from "react";

import ProductInfo from "@/app/_components/product/ProductInfo";
import ProductOptions from "@/app/_components/product/ProductOptions";
import ProductBreadcrump from "@/app/_components/product/ProductBreadcrump";
import Suggestions from "@/app/_components/Suggestions";
import { MotionDiv } from "@/app/_components/MotionDiv";


export default function Item({ params }: { params: { item: string } }) {
  const [coffee, setCoffee] = React.useState<Coffee>();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data: Coffee = await fetch(
          `/api/getCoffee?id=${params.item}`
        ).then((res) => res.json());
        console.log(data);
        setCoffee(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItem();
  }, [params.item]);

  return (
    <div className="mx-auto w-full max-w-[1440px] px-6">
      <main>
        <ProductBreadcrump name={coffee?.name} />

        <div className="relative flex flex-col gap-16 sm:flex-row sm:items-start sm:justify-between sm:py-6">
          <ProductInfo coffee={coffee} />

          <MotionDiv
  className="relative block w-full sm:w-1/2"
  transition={{ ease: "easeInOut", duration: 0.4, delay: 0.6 }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
{coffee?.image && (
  <Image
  src={coffee.image}
  alt={coffee.name}
  width={500}
  height={500}
  unoptimized
  className="object-contain w-full h-auto"
/>

)}



</MotionDiv>


          <ProductOptions coffee={coffee} />
        </div>
      </main>

      <Suggestions currentCoffeeId={coffee?.id} />
    </div>
  );
}
