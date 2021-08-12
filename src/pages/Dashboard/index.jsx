import React from "react";
import { Container, FullWidth } from "../../App";
import styled from "styled-components";
import SideMenu from "../../components/SideMenu";
import Header from "../../components/Header";

import CompanyLogo from "../../assets/placeholder/logo-militao.png";
import ProfileImg from "../../assets/placeholder/laila.png";

const Title = styled.h1`
  padding-top: 3rem;
  font-size: 5rem;
  color: ${props => props.theme.colors.darkColor};
`

const ContainerFull = styled.div`
  grid-area: full;
  background-color: ${props => props.theme.colors.lightGrey};
`

export default function DashboardPage(){

  return(
    <FullWidth>
      <SideMenu />
      <Header companyLogo={CompanyLogo} companyName='JC Militão' fname='Laila' lname='Souza' img={ProfileImg} />
      <ContainerFull>
        <Container>
          <Title>Funcionou!!! Estamos no dashboard</Title>
        </Container>
      </ContainerFull>
    </FullWidth>
  )
}