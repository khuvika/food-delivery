import Header from "./_components/header";
import MenuCard from "./_components/menu";
import Dood from "./_components/dood";
import Image from "next/image";

export default function Home() {
  console.log("hello");

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div>
        <Image
          src={"/header.png"}
          alt="header"
          width={1440}
          height={570}
          className="rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        <MenuCard
          title="Finger food"
          price="$12.99"
          image="/images/finger.jpg"
        />
        <MenuCard
          title="Cranberry Bites"
          price="$12.99"
          image="/images/cranberry.jpg"
        />
        <MenuCard
          title="Sunshine Stackers"
          price="$12.99"
          image="/images/sunshine.jpg"
        />
      </div>
      <div>
        <Dood />
      </div>
    </div>
  );
}
