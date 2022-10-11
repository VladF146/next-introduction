import Image from "next/image";
import Link from "next/link";

const foodImageURL =
  "https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400";

export default function Dessert() {
  return (
    <>
      <h1>Dessert</h1>
      <Link href="/">Home!</Link>
      <Link href="/veggies">Veggies!</Link>
      <Image
        src={foodImageURL}
        layout="responsive"
        alt="Veggie pizza"
        height={1599}
        width={2400}
      />
    </>
  );
}
