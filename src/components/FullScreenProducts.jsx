import React, { Component, useState, useReducer } from 'react';
import styled from 'styled-components';
import small1 from '../images/image-product-1-thumbnail.jpg';
import small2 from '../images/image-product-2-thumbnail.jpg';
import small3 from '../images/image-product-3-thumbnail.jpg';
import small4 from '../images/image-product-4-thumbnail.jpg';
import big1 from '../images/image-product-1.jpg';
import big2 from '../images/image-product-2.jpg';
import big3 from '../images/image-product-3.jpg';
import big4 from '../images/image-product-4.jpg';
import cross from '../images/icon-close.svg';
import next from '../images/icon-next.svg';
import previous from '../images/icon-previous.svg';
const BigPic = styled.img`
    grid-area:big;
    border-radius:15px;
    cursor:pointer;
    positon:relative;
    animation-duration: 350ms;
    animation-name: slide-down;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes slide-down {
        0% {
         opacity: 0;
        }
        100% {
         opacity: 1;
        }
    }
    @media only screen and (max-width: 500px){
        
    }
`

const Container = styled.div`
    grid-area:small;
    display:flex;
    gap:27px;
    justify-content:center;
`
const SmallPic = styled.img`
    width:60px;
    height:60px;
    border-radius:10px;
    cursor:pointer;
    &:hover{
        border:2px solid var(--Orange);
        opacity:0.2;
    }
`
const border_style = {
    border:"2px solid var(--Orange)",
    opacity:"50%"
}
const CloseOverLay = styled.img`
    grid-area:cross;
    cursor:pointer;
    justify-content:flex-end;
    background-size: cover;
    &:hover{
        filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
    }

`;

const FullScreenProducts = (props) =>{
    const PicSection = styled.div`
        display:${props.activeFullScreen ? "grid": "none"};
        position:fixed;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        z-index:1000;
        justify-content:center;
        grid-template-rows:20px 1fr 120px;
        grid-template-columns:360px;
        grid-template-areas:"cross"
                            "big"
                            "small";
        grid-gap:20px;  
        transition: transform 1s ease-out;                  
`
    const OverLayStyle = styled.div`
        display:${props.activeFullScreen ? "block": "none"};
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color:black;
        opacity: 80%;
        z-index:1000;
        transition: transform 1s ease-out; 
        @media only screen and (max-width: 500px){
        
        }
`;
    const left = {
        display:"flex",
        justifyContent:"flex-end"
    }
    const Previous_pic = styled.img`
        grid-area:big;
        width: 35px;
        height: 35px;
        align-self:center;
        position:absolute;
        left: -18px;
        z-index:100;
        cursor:pointer;
        background:white;
        padding:12px;
        border-radius:50%;
        &:hover{
            filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
        }
        `;
    const Next_pic = styled.img`
        grid-area:big;
        width: 35px;
        height: 35px;
        align-self:center;
        position:absolute;
        right: -18px;
        z-index:100;
        cursor:pointer;
        background:white;
        padding:12px;
        border-radius:50%;
        &:hover{
            filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
        }
        `;
    const Contain =  styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
    `;
    
    function reducer(state,action){
        switch(action.type){
            case "NEXT":
                    switch (action.state) {
                        case big1: setPicture(big2);
                            return {
                                    state: big2
                            } 
                        case big2:  setPicture(big3);
                            return {
                                state: big3
                            } 
                
                        case big3:  setPicture(big4);
                            return {
                                state: big4
                            } 
                
                        case big4: setPicture(big1);
                            return {
                                state: big1
                            } 
                }
                case "PREVIOUS":
                    switch (action.state) {
                        case big1: setPicture(big4);
                            return {
                                    state: big4
                            } 
                        case big2:  setPicture(big1);
                            return {
                                state: big1
                            } 
                
                        case big3:  setPicture(big2);
                            return {
                                state: big2
                            } 
                
                        case big4: setPicture(big3);
                            return {
                                state: big3
                        } 
            }    
        }

    }
    const [picture, setPicture] = useState(big1);
    const [state , dispatch] = useReducer(reducer, {state:big1,type:""})
    return (<>
    <OverLayStyle></OverLayStyle>
        <PicSection>
            <div style={left}>
                <CloseOverLay src={cross} onClick={()=>props.setActiveFullScreen(!props.activeFullScreen)} alt="closeButton"/>
            </div>
                <Contain>
                    <Previous_pic   onClick={()=>dispatch({state:picture,type:"PREVIOUS"})}  src={previous} 
                    alt="previous"/>
                    <BigPic src={picture}  alt="bigshoe"/>
                    <Next_pic src={next} onClick={()=>dispatch({state:picture,type:"NEXT"})} alt="next"/>
                </Contain>   
                <Container>
                    <SmallPic src={small1} style={picture == big1 ? border_style : null} onClick={()=>setPicture(big1)} alt="shoe1"/>
                    <SmallPic src={small2} style={picture == big2 ? border_style : null} onClick={()=>setPicture(big2)} alt="shoe2"/>
                    <SmallPic src={small3} style={picture == big3 ? border_style : null} onClick={()=>setPicture(big3)} alt="shoe3"/>
                    <SmallPic src={small4} style={picture == big4 ? border_style : null} onClick={()=>setPicture(big4)} alt="shoe4"/>
                </Container>
            </PicSection>
    </>
            
    )
}
export default FullScreenProducts;