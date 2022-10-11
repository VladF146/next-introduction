import styled from "styled-components";

export default function Header() {
  return <StyledHeader>This is my header!</StyledHeader>;
}

const StyledHeader = styled.header`
  background-color: black;
  color: white;
`;
