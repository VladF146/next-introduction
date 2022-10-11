import styled from "styled-components";

export default function Footer() {
  return <StyledFooter>This is my footer!</StyledFooter>;
}

const StyledFooter = styled.footer`
  background-color: black;
  padding: 25px;
  text-align: center;
  color: white;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`;
