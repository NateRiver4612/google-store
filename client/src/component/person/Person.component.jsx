import React from 'react'
import styled from 'styled-components'
import BookItem from '../item/BookItem/BookItem.component'
import MovieItem from '../item/MovieItem/MovieItem.component'
import ReactTextCollapse from '../react-text-collapse/ReactTextCollapse'
import { selectMovies } from '../../redux/store/store.selector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectItems } from '../../redux/store/store.selector'
import { map } from 'lodash'

const Person = ({person,items})=> {
    const {imgUrl,name,story,birthplace,job,birthdate} = person
    const participatedList = []
    const eraseDuplicate  = (arr)=>{
        for(var i = 0;i < arr.length; i++){
            console.log(i)
            for(var j = arr.length-1;j > i  ; j--){
                if(arr[i]['id'] == arr[j]['id']){
                    arr.splice(j,1)
                }
            }
        }
    }
    if(job == 'actors'){
        const movies = items['movies']
        Object.keys(movies).map(type=>
            Object.keys(movies[type]).map(movie=>{
                if(movies[type][movie]['performer'].includes(`${name.trim()}`)){
                    participatedList.push(movies[type][movie])
                }
            }
            )
        )
        eraseDuplicate(participatedList)
    }
    if(job == 'authors'){
        const books = items['books']
        Object.keys(books).map(type=>
            Object.keys(books[type]).map(book=>{
                if(books[type][book]['author'].includes(`${name.trim()}`)){
                    participatedList.push(books[type][book])
                }
            }
            )
        )
        eraseDuplicate(participatedList)
    }

    console.log(participatedList)

    const TEXT_COLLAPSE_OPTIONS = {
        collapse: false,
        collapseText: 'READ MORE',
        expandText: 'READ LESS',
        minHeight: 122,
        maxHeight: 342,
        textStyle: {
            fontSize:14,
            paddingLeft:'40%',
            color:'white',
            cursor:'pointer',
            fontWeight:'500',
            opacity:'0.8',
        }
    }
    return (
        <Container>
        <Wrap className="container">
            <img src={imgUrl}/>
            <Wrap className="content">
                <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                    <h1 style={{margin:'0px'}}>{name}</h1>
                    <h4 style={{height:'fit-content',margin:2}}>Date of birth: {birthdate}</h4>
                    <h4 style={{height:'fit-content',margin:1}}>Place of birth: {birthplace}</h4>
                    <p>
                        {story}
                    </p>
                </ReactTextCollapse>
            </Wrap>
        </Wrap>
        <Wrap className='product-participated'>
            <h1>Products Participated</h1>
            <Wrap className='products'>
            {job == 'actors'
                ?
                participatedList.map(movie=>{
                    const {imgUrl,id,type,price,title,rate} = movie
                    return <MovieItem   imgURL={imgUrl}  key = {id} id={id}type={type} price={price} title={title}rate={rate} />
                })
                :
                    job == 'authors'
                    ?
                    participatedList.map(book=>{
                        const {title, imgUrl,price,rate,type,id,description,author,published,page,language} = book
                        return <BookItem  imgURL={imgUrl} key = {id} id={id} type={type} author={author} price={price} title={title} rate={rate} />
                    })
                    :
                    []
            }
            </Wrap>
        </Wrap>
        </Container>
    )
}

const Wrap = styled.div.attrs(props=>({
    className:props.classname
}))`
    font-family: 'Quicksand', sans-serif;
    &.container{
        width: 100%;
        position: relative;
        img{
            width:100%;
            height:400px;
            object-fit: cover;
            object-position: -0px 20%;
        }
    }

    &.content{
        position: absolute;
        background: rgb(0, 0, 0); /* Fallback color */
        background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
        color: #f1f1f1;
        padding:20px;
        bottom: 4px;
    }

    &.product-participated{
        padding:20px;
        h1{
           opacity: 0.7;
        }
    }
    &.products{
        display: grid;
        grid-template-columns: repeat(5,minmax(0,1fr));
    }

`

const Container = styled.div`
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`

const mapStateToProps = createStructuredSelector({
    items:selectItems
})

export default connect(mapStateToProps)(Person)