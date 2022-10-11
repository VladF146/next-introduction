import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <p>This is my new NextJS project</p>
      <Link href="/veggies">Veggies!</Link>
      <Link href="/dessert">Dessert!</Link>
    </>
  );
}
