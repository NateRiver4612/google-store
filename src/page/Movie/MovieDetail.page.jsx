import React,{useEffect} from 'react'
import DetailMovie from '../../component/detail/DetailMovie.component'
import styled from 'styled-components'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { getCurrentItem } from '../../redux/Item/item.selector'
import RelatedCollection from '../Related-Collection/Related-Collection.page'


const MovieDetail=({currentItem})=>{
  console.log(currentItem)
  const {id,type} = currentItem
  const oneType = type.includes(',') ? type.substr(0,type.indexOf(',')):type  
  return (
    <Container>
        <Wrap className="detail">
          <DetailMovie id={id} chosenType={oneType} doc='movies'/>
        </Wrap>

        <Wrap className="related">
          <RelatedCollection id={id}  doc='movies' type={type}></RelatedCollection>
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
