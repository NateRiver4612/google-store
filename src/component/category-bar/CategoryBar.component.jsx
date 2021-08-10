import React from 'react'
import styled from 'styled-components'
import { MdExpandMore} from "react-icons/md";
import {Link,withRouter} from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {connect} from 'react-redux'
import { selectCurrentCart } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const CategoryBar=({history,toggleCartHidden,currentCart,homeLink})=> {
    return (
        <Container>
            <Wrap className="Category" onClick={toggleCartHidden}>
                {currentCart} 
                <ExpandIcon/>
            </Wrap>            
            <Span></Span>

            <Link to={homeLink}>
            <Wrap className="HomePage">
                <Link id = 'home-link' to={homeLink}>
                    Home page
                </Link>
            </Wrap>
            </Link>


            <Wrap className="Charts">
                Charts
            </Wrap>
            <Wrap className="New">
                New release
            </Wrap>
        </Container>
    )
}

const Span = styled.div`
    height:30px;
    border-radius: 5px;
    border:#7f7f7f solid 1px;
    width: 0px;
    margin-left: 4px;
    opacity: 0.5;
    
`


const ExpandIcon = styled(MdExpandMore)`
    margin-top:4px;
    font-size: 23px;
    font-weight: 900;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s; 
`

const Wrap = styled.div.attrs(props=>({
    className: props.classname
}))`

    display: flex;
    color:#8c8c8c;
    width: fit-content;
    flex:0.1;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    height:49px;

    a{
        text-decoration: none;
        color:#8c8c8c;
    }
    &.Category{
        padding-left:20px;
    }
    &.HomePage{
        margin-left:1px;

        &:focus{
            border-bottom: #ed3b3b 3px solid;
            box-sizing: border-box;
        }

    }


    &:hover{
        svg{
            color:black;
            font-size:24px
        }
        background-color: #eeeeee;
    }
`
const Container = styled.div`
    background-color: #ffffff;
    min-height:49px;
    z-index:1 !important;
    width:100%;
    position: fixed;
    display: flex;
    box-sizing: border-box;
    align-items: center;

    a{
        text-decoration: none;
        margin-left: 3px;
    }

`

const mapStateToProps = createStructuredSelector({
    currentCart:selectCurrentCart   
})

const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden: () => dispatch(toggleCartHidden()) 
})




export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CategoryBar))