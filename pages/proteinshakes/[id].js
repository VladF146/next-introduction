import { getProteinShakeById } from "../../model/proteinShakes";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const proteinShake = await getProteinShakeById(Number(id));
  console.log(id);
  console.log(proteinShake);

  return {
    props: proteinShake,
  };
}

export default function ProteinShake({ name, taste }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{taste}</p>
      <Link href="/proteinshakes">Back to all shakes!</Link>
    </>
  );
}
