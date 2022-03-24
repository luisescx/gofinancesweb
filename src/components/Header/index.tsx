import React from "react";
import { Button, Container, Content } from "./styles";
import LogoImg from "../../assets/logo.svg";

interface HeaderProps {
  openModal: () => void
}

const Header = ({openModal}:HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Go finances" />
        <Button type="button" onClick={openModal}>Nova transação</Button>
      </Content>
    </Container>
  );
};

export { Header };
