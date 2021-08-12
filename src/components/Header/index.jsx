import React from "react";
import styled from "styled-components";

const HeaderTop = styled.header`
    grid-area: header;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.white};
    border-bottom: 1px solid ${props => props.theme.colors.lightColor};
    height: 102px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    div{
        display: flex;
        align-items: center;
    }
`
const ProfileImg = styled.img`
    margin-left: 1rem;
    border-radius: 50px;
    border: ${props => props.theme.colors.lightColor}
`

export default function Header({companyLogo, companyName, fname, lname, img}){
    return(
        <HeaderTop>
            <a href='/'>
                <img src={companyLogo} alt={companyName} title={companyName} />
            </a>
            <div>
                <span>{`${fname} ${lname}`}</span>
                <ProfileImg src={img} alt={`${fname} ${lname}`} />
            </div>
        </HeaderTop>
    )
}