import Image from "next/image";
import foodImage from "../public/veggie-pizza.jpg";

export default function Veggies() {
  return (
    <>
      <h1>Veggies</h1>

      <Image src={foodImage} layout="responsive" alt="Veggie pizza" />
    </>
  );
}
