import { getProducts } from "@/healpers";
import Container from "../component/Container";
import Image from "next/image";
import FormattedPrice from "../component/FormattedPrice";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: Props) => {
  const products = await getProducts();
  const _idString = searchParams?._id;
  const _id = Number(_idString);

  const singleProduct = (_id: number) => {
    const item = products.find(
      (product: import("../../../type").ProductType) => product._id === _id
    );
    return item;
  };

  const product = singleProduct(_id);

  return (
    <Container className="flex items-center flex-col md:flex-row px-4 xl:px-0">
      <div className="w-full md:w-1/2 overflow-hidden bg-zinc-50 flex items-center justify-center p-10">
        <Image
          src={product?.image}
          alt="product img"
          height={500}
          width={500}
          className="transform transition-transform hover:scale-110 duration-500"
        />
      </div>
      <div className="flex  w-full md:w-1/2 flex-col gap-2">
        <h2 className="text-3xl font-semibold">{product?.title}</h2>
        <p className="flex gap-10 items-center">
          <FormattedPrice
            amount={product?.price}
            className="text-semibold text-lg"
          />
          <FormattedPrice
            amount={product?.previousPrice}
            className=" text-zinc-500 line-through"
          />
        </p>
        <p>
          You saved{" "}
          <FormattedPrice amount={product?.previousPrice - product?.price} className=" text-base font-semibold bg-designColor underline underline-offset-2"/>
       {" "} from this product.
        </p>
        <button className=" bg-designColor/80 text-zinc-700 px-6 py-2 font-medium rounded-md
         hover:bg-designColor hover:text-black hover:shadow-lg cursor-pointer duration-200 w-40 my-2">
          Add to Cart
        </button>
        {
          product?.isNew && <p className=" to-designColor font-semibold"> New arrival</p>
        }
        <p>Brand: <span className=" font-semibold">{ product?.brand} </span> </p>
        <p>Category: <span className=" font-semibold">{ product?.category} </span> </p>
     <p> {product?.description}</p>
      </div>
    </Container>
  );
};

export default page;
