import React,{useEffect} from 'react'
import styled from 'styled-components'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { getCurrentItem } from '../../redux/Item/item.selector'
import RelatedCollection from '../Related-Collection/Related-Collection.page'
import DetailBook from '../../component/detail/detail-book/DetailBook.component'

const MovieDetail=({currentItem})=>{

  useEffect(() => {
      console.log('hello')
  }, [])

  console.log(currentItem)
  const {id,type} = currentItem
  const oneType = type.includes(',') ? type.substr(0,type.indexOf(',')):type  
  return (
    <Container>
    <Wrap className="detail">
         <DetailBook id={id} doc='books' chosenType={oneType}></DetailBook>
    </Wrap>

    <Wrap className="related">
         <RelatedCollection id={id} doc='books' type={type}></RelatedCollection>
    </Wrap>
    </Container>
  )
}


const Wrap = styled.div.attrs((props)=>({
  className: props.classname 
}))`
  &.detail{
    padding:90px 0px 100px 35px;
    flex:0.7 ;
  }
  &.related{
      flex:0.35;
      box-sizing: border-box;
      padding-top:150px;
      padding-left:50px ;
  }
`

const Container = styled.div`
  display:flex;
`

const mapStateToProps = createStructuredSelector({
  currentItem: (state)=>getCurrentItem(state) 
})

export default connect(mapStateToProps)(MovieDetail)
