import React, { Component, useState ,useReducer} from 'react';
import styled from 'styled-components';
import small1 from '../images/image-product-1-thumbnail.jpg';
import small2 from '../images/image-product-2-thumbnail.jpg';
import small3 from '../images/image-product-3-thumbnail.jpg';
import small4 from '../images/image-product-4-thumbnail.jpg';
import big1 from '../images/image-product-1.jpg';
import big2 from '../images/image-product-2.jpg';
import big3 from '../images/image-product-3.jpg';
import big4 from '../images/image-product-4.jpg';
import FullScreenProducts from './FullScreenProducts';
import next from '../images/icon-next.svg';
import previous from '../images/icon-previous.svg';

const PicSection = styled.div`
    display:grid;
    width:50%;
    justify-content:center;
    grid-template-rows:1fr 120px;
    grid-template-columns:360px;
    grid-template-areas:"big"
                        "small";
    grid-gap:20px; 
    @media only screen and (max-width: 500px){
        grid-template-rows:20rem;
        grid-template-columns:1fr;
        grid-template-areas:"big";
        width:100%;
    }     
    @media only screen and (max-width: 375px){
        grid-template-rows:18rem;
    }               
`
const BigPic = styled.img`
    grid-area:big;
    border-radius:15px;
    cursor:pointer;

    @media only screen and (max-width: 500px){
        height:100%;
        width:100%;
        border-radius:0;
    }
   
`
const Container = styled.div`
    grid-area:small;
    display:flex;
    gap:27px;
    @media only screen and (max-width: 500px){
        display:none;
    }
`
const SmallPic = styled.img`
    width:70px;
    height:70px;
    border-radius:10px;
    cursor:pointer;
    &:hover{
        border:2px solid var(--Orange);
    }
    @media only screen and (max-width: 500px){
        display:none;
    }
`
const Previous_pic = styled.img`
        grid-area:big;
        width: 35px;
        height: 35px;
        align-self:center;
        position:absolute;
        left: 18px;
        cursor:pointer;
        background:white;
        padding:11px;
        border-radius:50%;
        display:none;
        @media only screen and (max-width: 500px){
            display:block;
        }
        `;
    const Next_pic = styled.img`
        grid-area:big;
        width: 35px;
        height: 35px;
        align-self:center;
        position:absolute;
        right: 18px;
        cursor:pointer;
        background:white;
        padding:11px;
        border-radius:50%;
        display:none;
        @media only screen and (max-width: 500px){
            display:block;
        }
        `;
const border_style = {
    border:"2px solid var(--Orange)",
    opacity:"50%"
}

const PictureSection = () =>{
    const [picture, setPicture] = useState(big1);
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
    const [activeFullScreen, setActiveFullScreen] = useState(false);
    const [state , dispatch] = useReducer(reducer, {state:big1,type:""})
    return (
            <PicSection>
                <FullScreenProducts  picture={picture} activeFullScreen={activeFullScreen} setActiveFullScreen={setActiveFullScreen}></FullScreenProducts>
                <Previous_pic src={previous}  onClick={()=>dispatch({state:picture,type:"PREVIOUS"})}  alt="previous"/>
                <BigPic src={picture} onClick={()=>setActiveFullScreen(!activeFullScreen)} alt="bigshoe"/>
                <Next_pic  src={next} onClick={()=>dispatch({state:picture,type:"NEXT"})} alt="next"/>
                <Container>
                    <SmallPic src={small1} style={picture == big1 ? border_style : null} onClick={()=>setPicture(big1)} alt="shoe1"/>
                    <SmallPic src={small2} style={picture == big2 ? border_style : null} onClick={()=>setPicture(big2)} alt="shoe2"/>
                    <SmallPic src={small3} style={picture == big3 ? border_style : null} onClick={()=>setPicture(big3)} alt="shoe3"/>
                    <SmallPic src={small4} style={picture == big4 ? border_style : null} onClick={()=>setPicture(big4)} alt="shoe4"/>
                </Container>
            </PicSection>
    )
}
export default PictureSection;