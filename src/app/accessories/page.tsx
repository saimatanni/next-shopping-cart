import { getAccessories } from "@/healpers";
import Container from "../component/Container";
import Product from "../component/Product";

const page = async () => {
  const products= await getAccessories()
  return <Container>
<div className=" border-b-[1px] border-b-zinc-400 pb-4 flex items-center justify-between">
 
    <h2>Accessories</h2>
    <p>Get the accessories you want</p>
    <p className=" mt-4 text-zinc-500 font-semibold">Showing all {products.length} results</p>
  </div>
<Product productList={products}/>
  </Container>;
};

export default page;
