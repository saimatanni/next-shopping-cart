import Image from "next/image";
import Banner from "./component/Banner";
import Products from "./component/Products";

export default function Home() {
  return (
    <main>
      <Banner />
      <Products />
    </main>
  );
}
