import React from "react";
import { Button, Container, Content } from "./styles";
import LogoImg from "../../assets/logo.svg";

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Go finances" />
        <Button type="button">Nova transação</Button>
      </Content>
    </Container>
  );
};

export { Header };
