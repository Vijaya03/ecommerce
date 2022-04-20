import React, { Component, useState,createContext  } from 'react';
import styled from 'styled-components';
import NavBar from './Navbar';
import PictureSection from './PictureSection';
import ProductDescription from './ProductDescription';
import CardModal from './CartModal';
export const UserContext = createContext()
const Context = styled.div`
    margin-top:4rem;
    display:flex;
    flex-direction:row;
    width:100%;
    gap:13%;
    @media only screen and (max-width: 500px){
        margin-top:3rem;
        flex-direction:column;
    }
`;
const Home = () =>{
    const [productNumber,setProductNumber] = useState(0);
    const user = {productNumber,setProductNumber};
    const [showCart, setShowcart] = useState(false);
    return (
        <UserContext.Provider value={user}>
            <div>
                <NavBar showCart={showCart} setShowcart={setShowcart} />
                <Context>
                    <PictureSection/>
                    <ProductDescription />
                </Context>
                <CardModal showCart={showCart} setShowcart={setShowcart}  />
            </div>
        </UserContext.Provider>
    )
}
export default Home;