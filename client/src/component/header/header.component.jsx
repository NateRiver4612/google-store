import React,{useState} from 'react'
import { FaGooglePlay } from "react-icons/fa";
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { BsSearch } from "react-icons/bs";
import { createStructuredSelector } from 'reselect';
import IconButton from '@material-ui/core/IconButton';
import { selectListHidden } from '../../redux/wish-list/wishList.selector';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import WishListDropdown from '../wish-list-dropdown/wishListDropdown.component'
import {signInWithGoggleStart} from '../../redux/user/user.action'
import { selectCurrentUser } from '../../redux/user/user.selector';
import {Link} from 'react-router-dom'

import WishListIcon  from '../wish-list-icon/wishList-Icon.component';
const Header = ({hidden,currentUser,signInWithGoggleStart})=>{
  const [state,setState] =  useState(true);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
       console.log("One more night");
    }
  }
  const onChangeHandling = (event)=>{
      if(event.target.value.length !== 0){
        setState(false);
      }else{
        setState(true);
      }
  }

  // <img style={{paddingLeft:'20px',width:'39px',height:'39px'}}src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/90716814_227701518373804_7491086833023975424_n.png?_nc_cat=109&ccb=1-4&_nc_sid=ae9488&_nc_ohc=ME_fxo0ks-sAX-7mqZG&_nc_ht=scontent.fsgn2-4.fna&oh=566924fb4b39ff7354b44fef181f0c29&oe=61369CDB'/> 
  return(
    <Container>
      <LINK to="/">
        <img src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/s2048x2048/228085913_714575273276171_6064261169318172546_n.png?_nc_cat=102&ccb=1-4&_nc_sid=ae9488&_nc_ohc=jdbXs-KAlFQAX8tGhVZ&_nc_ht=scontent.fsgn2-5.fna&oh=0a8266e782334f2fe635a3dc4e6bc836&oe=613B4933'/>
        <span style={{margin:0}}>
        <span style={{margin:0,color:'#29ace2'}}>G</span>
        <span style={{margin:0,color:'#ee3b3a'}}>o</span>
        <span style={{margin:0,color:'#fedf26'}}>o</span>
        <span style={{margin:0,color:'#21aae1'}}>g</span>
        <span style={{margin:0,color:'#3cb64c'}}>l</span>
        <span style={{margin:0,color:'#ee3a49'}}>e</span> 
        <span style={{color:'#909090'}}>Play</span>
        </span>
      </LINK>
      <Wrap>
        <SearchField id="standard-required"  onChange={onChangeHandling} onKeyPress={handleKeyPress} placeholder="Search Field"/>
        <Button  color="primary" disabled={state}  >
          <BsSearch/>
        </Button>
      </Wrap>

      <div style={{display:'flex',flex:0}}></div>

      <IconWrap className='wish-list'>
        <WishListIcon ></WishListIcon>
      </IconWrap>

      <IconWrap>
        <Ava src={currentUser?currentUser.photoURL:null} onClick={()=>{signInWithGoggleStart()}}>
        </Ava>
      </IconWrap>
      {hidden ? null : <WishListDropdown />}
    </Container>)
}


const IconWrap = styled.div.attrs(props=>({
  className:props.className
}))`
  display: flex;
  flex:0.05;
  justify-content: flex-end;
  padding-left: 8px;


  @media screen and (max-width:800px){
    div{
      height:30px;
      width:30px;
    }
  }
`

const Wrap = styled.div.attrs(props=>({
  className:props.classname
}))`
  display: flex;
  align-items: center;
  flex:0.7;

  @media screen and (max-width:800px){
    flex:0.9;
  }
`

const LINK = styled(Link)`
    text-decoration:none;
    color: black;
    cursor: pointer;  
    font-size: 26px;
    display: flex;
    flex:0.2;
    justify-content: center;
    align-items: center;
    margin-right:20px;
    letter-spacing: 1px;

    /* svg{
      font-size: 35px;
      margin-left: 10px;
    } */

    span{
      margin-left:8px ;
      font-weight: 600;
      font-family: 'Arvo', serif;
      /* font-family: 'Patua One', cursive; */
    }
    img{
      width:auto;
      height:60px;
    }

    @media screen and (max-width:800px){
      font-size: 16px;
      flex: 0.1;
      margin-right:10px;
      img{
        width:35px;
        height: 35px;
        padding-left:unset;
      }


    }
`


const Button = styled(IconButton)`
  border:none;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items:center;

  /* svg{
    margin-top:10px;
  } */
  &:active{
    color:#2a4283;
  }

  @media screen and (max-width:800px){
    font-size: 10px;

    svg{
      font-size:19px;
    }
  }

`
const Ava = styled(Avatar)`
  margin-right: 40px;

  @media screen and (max-width:800px){
    margin-right: 5px;
  }
`



const Container = styled.div`
  height:60px;
  display: flex;
  align-items: center;
  background-color: #f3f3f4;
  justify-content: space-between;

  @media screen and (max-width:800px){
    height:50px;
  }
`
const SearchField = styled(TextField)`
  border:3px solid white;
  height: 30px;
  content:"Hello";
  width:60%;
  color:white;


  @media screen and (max-width:800px){
      
  }

`
const mapStateToProps = createStructuredSelector({
  hidden:selectListHidden,
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  signInWithGoggleStart:()=>dispatch(signInWithGoggleStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);










