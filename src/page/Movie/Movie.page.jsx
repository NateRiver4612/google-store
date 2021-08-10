import React,{useEffect} from 'react'
import {Route} from 'react-router-dom'
import MovieHome from './MovieHome.page'
import MovieCollection from './MovieCollection.page'
import { fetchCollectionsStart } from '../../redux/store/store.action'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectMovies} from '../../redux/store/store.selector'
import {firestore} from '../../firebase/firebase.utils'
import { selectCartCategories } from '../../redux/cart/cart.selector'
import CategoryBar from '../../component/category-bar/CategoryBar.component'
import styled from 'styled-components'
import CategoryCart from '../../component/category-bar/CategoryCart.component'
import { selectToggleCart } from '../../redux/cart/cart.selector'
import MovieDetail from './MovieDetail.page'
import MovieCollectionContainer from './MovieCollection.container'
import WithSpinner from '../../component/with-spinner/with-spinner.component'
import { MdLocalLaundryService } from 'react-icons/md'
import MovieDetailContainer from './MovieDetail.container'


const Movie=({match,cartCategories,hidden,fetchCollectionsStart})=> {
    // useEffect(() => {
    //     fetchCollectionsStart('movie')
    // },[]);
    return (
        <Container>
            <CategoryBar  homeLink='/movies'/>
            {hidden
                ?
                null
                :
                <CategoryCart option="Movie" categories={cartCategories} ></CategoryCart>

            }
            <Route exact path={`${match.path}`} component={MovieHome}/>
            <Route path={`${match.path}/category/:collectionId`} component={MovieCollectionContainer}/>
            <Route path={`${match.path}/details/:movieInfo`} component={MovieDetailContainer}/>
        </Container>
    )
}

const Container = styled.div`


`

const mapStateToProps = (state)=>({
    cartCategories: selectCartCategories('movies')(state),
    hidden: selectToggleCart(state)
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart:(doc)=>dispatch(fetchCollectionsStart(doc))
});

export default connect(mapStateToProps,mapDispatchToProps)(Movie)