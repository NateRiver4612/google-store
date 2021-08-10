import styled from 'styled-components'
import { Button } from '@material-ui/core';
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
    height:10px ;
    align-items: center;
    padding-top:50px;
`

export const BuyButton = styled(Button)`
    background-color:#ed3b3b !important;
    color:white !important;
    font-weight: bold !important;
    box-sizing:border-box;
    padding:5px 10px !important;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    text-transform: capitalize !important;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s !important; 

    &:hover{
        -webkit-filter: brightness(120%);
    }
`
export const AddCartButton = styled.div`
    font-size:13px;
    border:none;
    cursor:pointer;
    display: flex;
    justify-content: space-between;
    width:26%;
    /* font-family: 'Quicksand', sans-serif; */
    background-color: white;
    font-weight: 500;
    align-items: center;
    color:#b04131;
    -webkit-filter: brightness(105%);


    &:hover{
        svg{
            opacity: 0.7;
        }

    }
    
`
export const AddCartIcon = styled(MdAddShoppingCart)`
    font-size:22px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s; 

`





export const Span = styled.div.attrs((props)=>({
    className:props.classname
}))`
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap');
    font-size:14px;
    width: 100%;
    color:#898989 ;

    &.trailer{
        transition: .5s ease !important;
        top: 50% !important;
        left:50% !important;
        width: fit-content;
        display: flex;
        justify-content: center;
        color:white;
        font-size:30px;
        font-family: 'Gowun Dodum', sans-serif;
        letter-spacing: 0.1px;
        opacity: 0;
        position: absolute !important;
        z-index:1 !important;
        transform: translate(-50%, -50%) !important;
        -ms-transform: translate(-50%, -50%) !important;

    }

    &.title{
        /* font-family: 'Quicksand', sans-serif; */
        font-size: 30px;
        font-weight: 400;
        opacity: 0.9;
        color:#414141;
        margin:0;
    }
    &.type-audio{
        width:60%;
        display: flex;
        padding-top: 5px;

    }
    &.reader-time{
        padding-top: 15px;
        display:flex;
    }
    &.type{
        display: flex;
        width:40%; 
        justify-content: space-between;

        a{
            text-decoration: none !important;
            color:#b04131;
            &:hover{
                text-decoration: underline !important;
            }
        }
    }
    &.date-author{
        display:flex;
        width:35%;
        margin-top:10px;
        justify-content: space-between;

    }
`

export const Wrap = styled.div.attrs((props)=>({
    className:props.classname
}))`
    display: flex;
    width:720px;
    background-color: white;

    &.detail-description{
        padding:25px 40px 0px 40px;
        font-size:14px;
        color:#898989;
        position: relative;
        line-height: 25px;
        box-sizing: border-box;

    }

    &.detail-img{
        flex:0.35;
        width: fit-content;
        margin-top: 0 !important;
        display:flex;
        padding: 0 !important;
        justify-content: start;
        box-sizing: border-box;

        img{   
            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
            width:200px;
            height:288px; 
        }
    }
    &.detail-video-img{
      position: relative;
      display: flex;
      justify-content:center;
      align-items:center;

  
      &:hover span{
        opacity: 0.8;
        webkit-filter: brightness(130%);
      }
     
      span{
        transition: .5s ease !important;
        top: 50% !important;
        left:50% !important;
        width: fit-content;
        display: flex;
        justify-content: center;
        color:white;
        font-size:30px;
        font-family: 'Gowun Dodum', sans-serif;
        font-weight:100 !important;
        letter-spacing: 0.2px !important;
        opacity: 0;
        position: absolute !important;
        pointer-events: none;
        transform: translate(-50%, -50%) !important;
        -ms-transform: translate(-50%, -50%) !important;

      }
    }
    &.seperate-line{
        padding:20px 0px;
        hr{
            width:94%;
            opacity: 1;
            border:1px #eeeeee solid;
        }
    }
    &.detail-video{

        img{
            width:100% !important;
            height:405px;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s !important; 
            &:hover{
                -webkit-filter: brightness(50%);
            }
        }
    }

    &.detail-production{
        box-sizing: border-box;
        display: inline-block;
        justify-content: center;
        padding-left: 40px;

        h2{
            font-size: 14px;
            opacity:0.7;
            font-weight: 500;
        }

        div{
            display:flex;
            width: 90%;

            div {
                flex:0.5;
                display: inline-block;
                width: 50%;

                h2{
                        font-size:15px !important;
                        color:black !important;
                        font-weight: 400 !important;
                        height:fit-content;
                        display: inline-block;
                        opacity: 0.7;
                }

                div{
                    width:fit-content;
                    display: flex;
                    padding-top: 0px;
                    padding-right: 7px;
                    flex-wrap:wrap;
                    /* font-family: 'Quicksand', sans-serif;  */
                    opacity: 0.6;
                    
                    a{
                        line-height: 30px;
                        font-size: 15px;
                        cursor: pointer;
                        color:black;
                        display: flex;
                        align-items: center;
                        text-decoration:none;
                        
                        &:hover{
                            text-decoration: underline;
                        }
                    }

                }
            }
        }
    }


    &.detail-info{
        flex:0.7;
        display: inline-block;
        padding:25px;
        padding-left:0px !important;
        flex-wrap:wrap;
    }

`

export const Container = styled.div`
    z-index: 1;
    background-color: white;
    width: fit-content;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`
