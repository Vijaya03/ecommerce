import React, { Component, useState , useContext} from 'react';
import styled from 'styled-components';
import Avatar from '../images/image-avatar.png';
import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg';
import { UserContext } from './Home';
const Nav = styled.div`
    width:100%;
    min-height:5rem;
    display:grid;
    grid-template-columns:138px 1fr 1fr;
    grid-template-rows:1fr;
    grid-template-areas:"logo menu menu contain";
    align-items:center;
    border-bottom:0.2px solid hsl(220, 14%, 95%);
    @media only screen and (max-width: 500px){
        position:absolute;
        min-height:2.5rem;
        grid-template-columns:50px 1fr 1fr 100px;
        grid-template-areas:"ham logo logo contain";
        border-bottom:0;
        top:0;
        width:100%;
        z-index:100;
    }
`
const Logo = styled.img`
    grid-area:logo;
    align-items:center;
    width:110px;
    @media only screen and (max-width: 500px){
        width:100px;
    }
`;
const Ham = styled.div`
    display:none;
    cursor:pointer;
    grid-area:ham;
    @media only screen and (max-width: 500px){
        display:flex;
        justify-content:center;
    }
`;
const Menu = styled.div`
    grid-area:menu;
    display:flex;
    flex-direction:row;
    gap:1rem;
    color:var(--Darkgrayishblue);
    font-size:0.875rem;
    justify-content:flex-start;
    width:100%;
    flex-flow: wrap;
    height: 100%;
    @media only screen and (max-width: 500px){
        flex-direction: column;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 1000;
        width:70%;
        background: var(--White);
        position: fixed;
        height: 100vh;
        margin-top:0;
        transform:translateX(0);
        transition: transform 350ms ease-out; 
        font-weight:700;
        color:var(--Black);
        padding:20px;
        &[data-visible="false"]{
            transform:translateX(-100%);
        }
    }
`;
const Li = styled.span`
@media only screen and (min-width: 500px){
display:flex;
height:100%;
align-items:center;
&:hover{
    border-bottom:1px solid var(--Orange);
    cursor:pointer;
}
}
`;
const Cart = styled.img`
    padding:auto;
    width:20px;
    height:20px;
    cursor:pointer;
    @media only screen and (max-width: 500px){
        width:18px;
        height:18px;
    }    
`;
const ProfilePic = styled.img`
    width:35px;
    height:35px;
    @media only screen and (max-width: 500px){
        width:20px;
        height:20px;
    }
    `;
const Container = styled.div`
    grid-area:contain;
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:30px;
    @media only screen and (max-width: 500px){
        gap:20px;
        padding-left:10px;
    }
    
`;
const Cross = styled.div`
   display:none;
   @media only screen and (max-width: 500px){
       display:block;
       padding-bottom:30px
   }
`;
const OverLayStyle = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:grey;
    opacity:0.5;
    z-index:1000;
    display:none;
    @media only screen and (max-width: 500px){
        display:block;
        &[data-visible="false"]{
            transform:translateX(-100%);
        }
    }
    
`;
const Badge = styled.span`
    position: absolute;
    width:20px;
    height:15px;
    top:21px;
    background:var(--Orange);
    border-radius: 7.5px;
    color:white;
    font-size:10px;
    font-weight:700;
    display:flex;
    margin-left:7px;
    justify-content:center;
`;
const NavBar = (props) =>{
    const [toggle,setToggle] = useState("false");
    const user = useContext(UserContext);
    return (
        <Nav>
            <Ham area-controls="menu" area-expanded={toggle} onClick={()=>setToggle(!toggle)}><svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg></Ham>
            <Logo src={logo}></Logo>
            <OverLayStyle id="menu" data-visible={toggle}></OverLayStyle>
            <Menu id="menu" data-visible={toggle}>
                <Cross onClick={()=>setToggle(!toggle)}>
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
                </Cross>
                <Li>Collections</Li>
                <Li>Men</Li>
                <Li>Women</Li>
                <Li>About</Li>
                <Li>Contact</Li>
            </Menu>
            <Container>
                <Badge onClick={()=>props.setShowcart(!props.showCart)}>{user.productNumber}</Badge>
                <Cart  src={cart} onClick={()=>props.setShowcart(!props.showCart)}></Cart>
                <ProfilePic src={Avatar}></ProfilePic>
            </Container>
        </Nav>
)
}
export default NavBar;