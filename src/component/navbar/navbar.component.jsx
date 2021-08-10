import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom' 
import { BsGridFill } from "react-icons/bs";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectNavBar} from '../../redux/navbar/navbar.selector'
import {toggleNavBar} from '../../redux/navbar/navbar.action'
import { AiOutlineAppstore } from "react-icons/ai";
import {Link} from 'react-router-dom'
import { MdLocalMovies } from "react-icons/md";
import { BsBookmarksFill } from "react-icons/bs";
import Movie from './Movie';
import Book from './Book'
import Application from './Application'
import { selectCart } from '../../redux/cart/cart.actions';

const Accordion = withStyles({
  root: {
    transition: '650ms',
    boxShadow: 'none',
    minHeight:'40px !important',
    padding:'-5px',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 35,
    '&$expanded': {
      minHeight: 35,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    border:'none',
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);



const NavBar = ({history,panel,toggleNavBar,selectCart,match})=> {
   
  return (
    <Container>

      <Link to='/entertainment' onClick={()=>selectCart('Category')}>
        <AccWrapper 
        square="true" 
        key = '12'
        className="Entertainment"
        expanded={panel === 'panel1'} 
        onChange={()=>toggleNavBar('panel1')}
        >
          <AccSum   aria-controls="panel1d-content" id="panel1d-header">
            <BsGridFill/>
            <Span id="panel1d-link"to='/entertainment'>Entertainment</Span>
          </AccSum>
        </AccWrapper>
      </Link>


      <Link to='/applications' onClick={()=>selectCart('App')}>
        <AccWrapper 
            square='true' 
            key = '42'
            className="Application" 
            expanded={panel === 'panel2'} 
            onChange={()=>toggleNavBar('panel2')}
        >
          <AccSum aria-controls="panel2d-content" id="panel2d-header">
            <AiOutlineAppstore/>
            <Span id = "panel2d-link" to='/applications'>Application</Span>  
          </AccSum>
          <Application/>
        </AccWrapper>
      </Link>

      <Link to='/movies' onClick={()=>selectCart('Movie')}>     
        <AccWrapper 
            square='true' 
            className="Movie" 
            expanded={panel === 'panel3'} 
            onChange={()=> toggleNavBar('panel3')}
            >
          <AccSum aria-controls="panel3d-content" id="panel3d-header">
            <MdLocalMovies/>
            <Span id = 'panel3d-link' to='/movies'>Movie</Span> 
          </AccSum> 
          <Movie/>
        </AccWrapper>
      </Link>
  

      <Link to='/books' onClick={()=>selectCart('Book')}>
        <AccWrapper 
            square='true'  
            className="Book" 
            expanded={panel === 'panel4'} 
            onChange={()=>toggleNavBar('panel4')}
        >
          <AccSum aria-controls="panel4d-content" id="panel4d-header">
            <BsBookmarksFill/>
            <Span id='panel4d-link' to='/books'>Book</Span> 
          </AccSum>
          <Book/>
        </AccWrapper>
      </Link>

    
    </Container>
  );
}


const mapStateToProps = createStructuredSelector({
  panel:selectNavBar
})

const mapDispatchToProps = dispatch => ({
  toggleNavBar:panel => dispatch(toggleNavBar(panel)),
  selectCart:(type)=>dispatch(selectCart(type)) 
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar));










const Span = styled(Link)`
   text-decoration: none;
   color:#979797;
   color:white;
   font-size: 18px;
   margin-left: 15px;
`



const DetailWarrper = styled(AccordionDetails).attrs(props=>({
  className: props.classname,
}))`
  background-color: #f5f5f5;
  color: #8c8c8c;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  font-size: 17px;
  justify-content: center;

  &:hover{
      background-color: #e8e8e8 ;
    }

  &.bonus-detail{
    border-top:2px #e8e8e8 solid;
  }

`

const AccWrapper = styled(Accordion).attrs(props=>({
  className:props.className,
}))`
   color:white !important;  
   border:none;
   box-sizing: border-box;
  &.Entertainment {
   background-color: #444444 !important;
  }
  &.Application{
    background-color: #689f38;
  }
  &.Movie{
    background-color: #ed3b3b;
  }
  &.Book{
    background-color: #039be5;
  }

`
const AccSum = styled(AccordionSummary)`
  display:flex;
  height: 100%;
  svg{
    font-size: 25px;
  }
  span{
    font-size: 18px;
    margin-left:15px;

  }
`

const Container = styled.div`
  width:14vw;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
  a{
    text-decoration: none;
  }
`

export {DetailWarrper,AccWrapper,AccSum};