import Link from "next/link";
import styled from "styled-components";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <h1>Hello World</h1>
      <p>This is my new NextJS project</p>
      <StyledLink href="/veggies">Veggies!</StyledLink>
      <Link href="/dessert" passHref>
        <AnotherStyledLink>Dessert!</AnotherStyledLink>
      </Link>
    </>
  );
}

const StyledLink = styled(Link)`
  color: red;
`;

const AnotherStyledLink = styled.a`
  color: red;
  cursor: pointer;
`;
