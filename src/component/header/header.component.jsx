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

import WishListIcon  from '../wish-list-icon/wishList-Icon.component';
const Header = ({hidden,signInWithGoggleStart})=>{
  
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


  return(
    <Container>
      <Link href="/">
        <FaGooglePlay/> 
        <span>Google Play</span>
      </Link>
      <Wrap>
        <SearchField id="standard-required"  onChange={onChangeHandling} onKeyPress={handleKeyPress} placeholder="Search Field"/>
        <Button  color="primary" disabled={state}  >
          <BsSearch/>
        </Button>
      </Wrap>

      <div style={{display:'flex',flex:0.2}}></div>
      <IconWrap className='wish-list'>
        <WishListIcon ></WishListIcon>
      </IconWrap>

      <IconWrap>
        <Ava onClick={()=>{signInWithGoggleStart()}}>
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
  
  .wish-list{
    display:flex;
    justify-content: flex-start ;
  }
`

const Wrap = styled.div.attrs(props=>({
  className:props.classname
}))`
  display: flex;
  align-items: center;
  flex:0.7
`

const Link = styled.a`
    text-decoration:none;
    color: black;
    cursor: pointer;  
    font-size: 28px;
    display: flex;
    flex:0.2;
    justify-content: center;
    align-items: center;
    margin-right:20px;
    letter-spacing: 1px;

    svg{
      font-size: 35px;
      margin-left: 10px;
    }

    span{
      margin-left:8px ;
    }
`


const Button = styled(IconButton)`
  border:none;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items:center;

  svg{
    margin-top:10px;
  }
  &:active{
    color:#2a4283;
  }


`
const Ava = styled(Avatar)`
  margin-right: 40px;
`



const Container = styled.div`
  height:60px;
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  justify-content: space-between;
`
const SearchField = styled(TextField)`
  border:3px solid white;
  height: 20px;
  content:"Hello";
  width:80%;
  color:white;

`
const mapStateToProps = createStructuredSelector({
  hidden:selectListHidden
})

const mapDispatchToProps = dispatch =>({
  signInWithGoggleStart:()=>dispatch(signInWithGoggleStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);










