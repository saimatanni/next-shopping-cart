import { getProducts } from "@/healpers";


type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
};

const page = async ({ searchParams }: Props) => {
  const products = await getProducts();
  const _idString = searchParams?._id;
  const _id = Number(_idString);

  const singleProduct = (_id: number) => {
    const item = products.find((product: import("../../../type").ProductType) => product._id === _id);
    return item;
  };

  const product = singleProduct(_id);
  return <div>product page</div>;
};

export default page;
