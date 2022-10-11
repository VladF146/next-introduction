import Image from "next/image";
import Link from "next/link";
import foodImage from "../public/veggie-pizza.jpg";

export default function Veggies() {
  return (
    <>
      <h1>Veggies</h1>
      <Link href="/">Home!</Link>
      <Link href="/dessert">Dessert!</Link>
      <Image src={foodImage} layout="responsive" alt="Veggie pizza" />
    </>
  );
}
