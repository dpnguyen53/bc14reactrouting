import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => (props.primary ? "blue" : "palevioletred")};
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Title>Home page</Title>
      <Title primary>Cybersoft</Title>
    </Wrapper>
  );
}
