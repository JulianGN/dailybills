import React from "react";
import styled from "styled-components";

import LogoD from "../../assets/dailybills-fav.svg"
import IconDash from "../../assets/icons/dashboard.svg"
import IconPay from "../../assets/icons/pagamentos.svg"
import IconReceive from "../../assets/icons/recebimentos.svg"
import IconBudget from "../../assets/icons/orcamentos.svg"

const MenuSide = styled.aside`
    grid-area: side;
    width: 102px;
    height: 100vh;
    background-color: ${props => props.theme.colors.darkColor};
    grid-column: 1 / 2;
`

const LinkMenu = styled.a`
    box-sizing: border-box;
    display:inline-block;
    width: 100%;
    height: 102px;
    text-align: center;
    padding: 30px 0;
`

const NavMenu = () => {
    return(
        <nav>
            <ul>
                <ItemMenu href="#" src={IconDash} text="Dashboard" isActive={true}/>
                <ItemMenu href="#" src={IconPay} text="Pagamentos"  isActive={false}/>
                <ItemMenu href="#" src={IconReceive} text="Recebimentos" isActive={false} />
                <ItemMenu href="#" src={IconBudget} text="Orçamentos" isActive={true}/>
            </ul>
        </nav>
    )
}

function ItemMenu({href, src, text, isActive}) {
    return(
        <li className={isActive ? 'active' : 'not-active'}>
            <LinkMenu href={href}>
                <img src={src} alt={text} title={text} />
            </LinkMenu>
        </li>
    )
}

export default function SideMenu(){
    return(
        <MenuSide>
            <img src={LogoD} alt="DailyBills" />
            <NavMenu />
        </MenuSide>
    )
}