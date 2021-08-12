import React from "react";
import styled from "styled-components";

export const ButtonS = styled.button`
    background-color: #42597E;
    color: #ffffff;
    padding: .65rem 3rem;
    font-size: 1.5rem;
    font-family: 'Ubuntu';
    font-weight: 500;
    border: none;
    cursor:pointer;
    transition: .5s;
    :hover{
        background-color: ${props => props.theme.colors.darkerColor};
        transition: .25s;
    }
`

export default function Button({children, type}){
    return(
        <ButtonS type={type}>{children}</ButtonS>
    )
}