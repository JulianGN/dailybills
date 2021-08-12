import styled from "styled-components";
import Lottie from 'react-lottie-player';


export const Logo = styled.img`
    mix-blend-mode: screen;
` 

export const WrapperLogin = styled.section`
    display:grid;  
    grid-template-columns: 1fr minmax(240px, 3fr) minmax(240px, 3fr) 1fr; 
    gap: 2rem; 
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
`

export const AnimPlace = styled.div`
    grid-column: 2/3;
    @media (max-width: 768px) {
        grid-column: 1;
    }
`

export const LottieLogin = styled(Lottie)`
  background-color: #fff;
  border-radius: 50%;
  overflow:hidden;
`

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SubTitle = styled.h3`
  color: ${props => props.theme.colors.lighterColor};
  font-size: 1rem;
  font-weight: 100;
  text-transform: uppercase;
`
export const Title = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  font-weight: 300;
`

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;

  label{
    font-weight: 100;
    color: ${props => props.theme.colors.lighterColor};
    margin: 1rem 0 .25rem 0;
  }

  input{
    font-family: ${props => props.theme.fontFamily};
    background-color: transparent;
    border:none;
    border-bottom: 1px solid ${props => props.theme.colors.lighterColor};
    padding: .25rem .5rem;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.white};
    font-weight: 100;

    :focus-visible {
      outline: none;
    }
  }
`

export const SpanError = styled.span`
  color: #ff8875;
  margin-top: 0.5rem;
  transition: .5s;
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0 1rem 0;
  a{
    color: ${props => props.theme.colors.white}
  }
  @media (max-width:768px){
      flex-direction: column;
      justify-content: flex-start;
      *{
          width: 100%;
          text-align: center;
          margin-bottom: 1rem;
      }
  }
`

export const HaveAccount = styled.p`
  color: ${props => props.theme.colors.lighterColor}
`

