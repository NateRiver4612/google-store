import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import MovieItem from '../../component/item/MovieItem/MovieItem.component'
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux'
import {selectMovies, selectMovieDetail, selectMoviesByType} from '../../redux/store/store.selector'
import CategoryCart from '../../component/category-bar/CategoryCart.component';
import {withRouter} from 'react-router-dom'


const MovieCollection=({movies,match})=>{

    const arr = []
    Object.keys(movies).map((key)=>{
        arr.push(movies[key])
    })
    const category = match.params.collectionId
    arr.sort(function(a, b) {
        return b.update.seconds - a.update.seconds
      });

    return (
        <div className='collection'>
            <h1 style={{
            display:'inline-block',
            paddingTop:'60px',
            fontFamily: 'Quicksand ,sans-serif',
            fontSize: '28px',
            fontWeight: '400',
            paddingLeft:'60px',
            color:'#414141'}}>{category}</h1>
            <Container classaName="movie-items">
                {
                arr.map((key)=>{
                    const {title,rate,price,imgUrl,type ,id} = key
                    return <MovieItem  
                        imgURL={imgUrl} 
                        key = {id} 
                        id={id}
                        type={type}
                        price={price} 
                        title={title}
                        rate={rate} />
                    })
                }
            </Container>
        </div>
    )
}

const Container = styled.div.attrs((props)=>({
    className:props.classname
}))`
        z-index: 1;
        padding-top:0px;
        padding-left:60px;
        padding-right: 60px;
        padding-bottom: 40px;
        display: grid;
        grid-gap:15px;  
        grid-template-columns: repeat(6,minmax(0,1fr));

`

const mapStateToProps =(state,ownProps)=>({
    movies: selectMoviesByType(ownProps.match.params.collectionId)(state),
})


export default connect(mapStateToProps)(MovieCollection);
