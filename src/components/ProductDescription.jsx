import React, { Component,useState,useContext } from 'react';
import styled from 'styled-components';
import MinusButton from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import cart from '../images/icon-cart.svg';
import { UserContext } from './Home';
const Product = styled.div`
    display:flex;
    flex-direction:column;
    padding-top:5%;
    @media only screen and (max-width: 500px){
        padding-left:20px;
        padding-right:20px;
    }
`
const ProductHeader = styled.div`
   text-transform:uppercase;
   color:var(--Orange);
   font-weight:700;
   font-size:10px;
   letter-spacing:.8px;
`
const ProductName = styled.h1`
   line-height:35px;
   padding-top:1rem;
   padding-bottom:1.5rem;
   @media only screen and (max-width: 500px){
    font-size:1.5em;
    padding-top:.5rem;
    padding-bottom:.5rem;
    }
`
const ProductDes = styled.div`
   color: var(--Darkgrayishblue);
   font-size:12px;
   padding-bottom:1rem;
`
const PriceSection = styled.div`
  display:grid;
  grid-template-rows:1fr 1fr;
  grid-template-columns:80px 30px;
  grid-template-areas:"price badge"
                      "discount discount";
  align-items: center;
  grid-gap:0;
  @media only screen and (max-width: 500px){
        grid-template-rows:1fr;
        grid-template-columns:80px 30px 1fr;
        grid-template-areas:"price badge discount";
    }

`
const Price = styled.h3`
   grid-area:price;
`
const Badge = styled.div`
    grid-area:badge;
    color:var(--Orange);
    font-weight:700;
    font-size:11px;
    text-align:center;
    align-items:center;
    background:var(--Paleorange);
    border-radius:7%;
`
const DiscountPrice = styled.div`
    grid-area:discount;
    font-size:12px;
    font-weight:700;
    color:var(--Veryvarkblue);
    opacity:30%;
    padding-bottom:10px;
    text-decoration: line-through;
    @media only screen and (max-width: 500px){
        padding-bottom:0px;
        display:flex;
        justify-content:flex-end;
    }
`
const AddProduct = styled.div`
   display:flex;
   flex-direction:row;
   gap:12px;
   margin-top:15px;
    @media only screen and (max-width: 500px){
        flex-direction:column;
    }
`
const NumOfProduct = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:25px;
    align-items:center;
    background:var(--Lightgrayishblue);
    border-radius:5px;
    width: 185px;
    height:40px;
    font-weight:700;
    font-size:12px;
    @media only screen and (max-width: 500px){
        width:100%;
        gap:40%;
    }
`
const Plus = styled.img`
    width:12px;
    height:12px;
    padding:2px;
    cursor:pointer;
`;
const Minus = styled.img`
    width:20px;
    cursor:pointer;
    padding:6px;
    `;
const AddCartButton = styled.button`
   width:100%;
   display:flex;
   align-items:center;
   justify-content:center;
   background:var(--Orange);
   border:transparent;
   border-radius:5px;
   font-size:12px;
   gap:10px;
   color:white;
   box-shadow: 0 13px 18px hsla(26,100%,55%,0.43);
   moz-box-shadow: 0 13px 18px hsla(26,100%,55%,0.43);
   webkit-box-shadow: 0 13px 18px hsla(26,100%,55%,0.43);
   cursor:pointer;
   &:hover{
    opacity:50%;
   }
   @media only screen and (max-width: 500px){
        height:35px;
        margin-bottom:10px;
    }
`;
const Cart =  styled.img`
    filter:brightness(0) invert(1);
    width:15px;
    height:15px;
`;

const ProductDescription = () =>{
    const user = useContext(UserContext);
    let [counter ,setCounter] = useState(user.productNumber);
    return (<Product>
        <ProductHeader>Sneaker Company</ProductHeader>
        <ProductName>Fall Limited Edition Sneakers</ProductName>
        <ProductDes>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</ProductDes>
        <PriceSection>
            <Price>$125.00</Price>
            <Badge>50%</Badge>
            <DiscountPrice>$250.00</DiscountPrice>
        </PriceSection>
        <AddProduct>
            <NumOfProduct>
                    <Minus src={MinusButton} onClick={()=>{if(counter=>0) {setCounter(counter--)}}} alt="minus"/>{counter}
                    <Plus src={plus}  onClick={()=>setCounter(counter++)} alt="plus"/>
            </NumOfProduct>
            <AddCartButton onClick={()=>user.setProductNumber(counter)}><Cart src={cart} alt="cartlogo"/>Add to cart</AddCartButton>
        </AddProduct>
    </Product>
    )
}
export default ProductDescription;