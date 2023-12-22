"use client";

import Link from "next/link";
import { ProductType } from "../../../type";
import Image from "next/image";
import { Heart } from "lucide-react";
import FormattedPrice from "./FormattedPrice";

interface Items {
  productList: ProductType[];
}

const Product = ({ productList }: Items) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
      {productList.map((item) => (
        <div
          key={item?._id}
          className="relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-500 duration-300 hover:shadow-xl overflow-hidden"
        >
          <Link href={{ pathname: `/${item?._id}`, query: { _id: item?._id } }}>
            <Image
              alt="img"
              src={item?.image}
              height={500}
              width={500}
              className="relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-500 duration-300 hover:shadow-xl overflow-hidden"
            />
          </Link>
          <Heart
            // fill={isFavorite(item._id) ? "red" : "black"}
            // onClick={() => {
            //   dispatch(addToFavorite(item));
            //   if (isFavorite(item?._id)) {
            //     toast.error(`${item.title} removed from favorites!`);
            //   } else {
            //     toast.success(`${item.title} added to favorites!`);
            //   }
            // }}
            className="absolute top-4 right-4 text-zinc-500 w-5 h-5 hover:text-black cursor-pointer duration-200"
          />
          <div className="p-4 bg-zinc-100 group-hover:bg-zinc-50 group-hover:shadow-xl duration-300">
            <p className="group-hover:text-designColor duration-300">
              {item?.title}
            </p>
            <p className="font-semibold">
              <FormattedPrice amount={item?.price} />
            </p>
            <div className="flex items-center justify-between text-sm mt-2">
              <button
                // onClick={() => {
                //   dispatch(addToCart(item)),
                //     toast.success(`${item?.title} is added to Cart!`);
                // }}
                className="uppercase font-semibold hover:text-designColor duration-300"
              >
                Add to cart
              </button>
              <Link
                className="uppercase font-semibold hover:text-designColor duration-300"
                href={{ pathname: `/${item?._id}`, query: { _id: item?._id } }}
              >
                More Info
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
