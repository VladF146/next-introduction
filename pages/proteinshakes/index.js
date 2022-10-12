import { getProteinShakes } from "../../model/proteinShakes";
import Link from "next/link";

export async function getServerSideProps() {
  const proteinShakes = await getProteinShakes();
  return {
    props: { proteinShakes },
  };
}

export default function ProteinShakes({ proteinShakes }) {
  return proteinShakes.map((proteinShake) => (
    <Link
      href={`/proteinshakes/${proteinShake.id.toString()}`}
      key={proteinShake.id.toString()}
    >
      <a>{proteinShake.name}</a>
    </Link>
  ));
}
