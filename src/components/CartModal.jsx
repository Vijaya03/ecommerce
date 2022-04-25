import React, { Component, useState ,useContext } from 'react';
import styled from 'styled-components';
import small1 from '../images/image-product-1-thumbnail.jpg';
import delet from '../images/icon-delete.svg';
import { UserContext } from './Home';

const CardHeader = styled.div`
    width:100%;
    height:50px;
    border-bottom:1px solid var(--Grayishblue);
    font-size:12px;
    font-weight:700;
    display:flex;
    align-items:center;
    padding-left:15px;
    
`;
const CardContent = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:150px;
    font-size:12px;
    color:var(--Darkgrayishblue);
    font-weight:700;
`;
const emptyCart= "Your cart is empty.";
const CartProduct = styled.div`
    display:grid;
    grid-template-rows:1fr 1fr;
    grid-template-columns: 20% 70% 10%;
    row-gap:10px;
    padding:20px;
    
    grid-template-areas:"shoe text dele"
                        "che che che";

    @media only screen and (max-width: 500px){
    column-gap:5px;
    }
`;
const ProductImg = styled.img`
    grid-area:shoe;
    border-radius:5px;
    height:35px;
`;
const ProductDetails = styled.div`
    grid-area:text;
    font-weight:400;
    
`;
const DeleteProduct = styled.img`
    align-self:center;
    width:10px;
    height:14px;
    cursor:pointer;
    @media only screen and (max-width: 500px){
        width:15px;
        height:20px;
    }
`;
const CheckoutButton = styled.button`
    grid-area:che;
    justify-content: center;
    background: var(--Orange);
    border: transparent;
    border-radius: 5px;
    font-size: 12px;
    color: white;
`;
const CardModal = (props) =>{
    const Card = styled.div`
        display: ${props.showCart ? "": "none"} ;
        top:70px;
        right:20%;
        z-index:100;
        width:280px;
        min-height:200px;
        position:absolute;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        background:var(--White);
        border-radius:5px;
        @media only screen and (max-width: 500px){
                left:50%;
                transform:translate(-50%,-50%);
                top:10rem;
                z-index:10;
                justify-content:center;
                width:calc(100% - 30px);
                marign-left:20px;
                marign-right:20px;
            }
`;
    const user = useContext(UserContext);
    let updatedPrice = user.productNumber * 125.00;
    return (
        <Card>
            <CardHeader>Cart</CardHeader>
            <CardContent>
                {user.productNumber==0 ? emptyCart: ""}
                <CartProduct style={{display: user.productNumber==0 ? "none" : "grid"}}>
                    <ProductImg src={small1} alt="shoe"/>
                    <ProductDetails>
                     Fall Limited Edition Sneakers $125.00 X {user.productNumber} &nbsp;
                     <span style={{fontWeight:"700",color:"black"}}>${updatedPrice}.00</span>
                    </ProductDetails>
                    <div style={{gridArea:"dele",
                                display:"flex",
                                justifyContent:"flex-end",
                                alignItems:"center"}}>
                        <DeleteProduct src={delet} onClick={()=>user.setProductNumber(user.productNumber--)}alt="delete"/>
                    </div>
                    <CheckoutButton>Checkout</CheckoutButton>
                </CartProduct>
            </CardContent>
        </Card>
    )
}
export default CardModal;