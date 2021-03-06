import React,{lazy,Suspense} from 'react'
import {Route} from 'react-router-dom'
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
import Spinner from '../../component/spinner/spinner.component'
// import WithSpinner from '../../component/with-spinner/with-spinner.component'
// import { MdLocalLaundryService } from 'react-icons/md'




const MovieHome = lazy(()=>import('./MovieHome.page'))
const MovieCollectionContainer = lazy(()=>import('./MovieCollection.container'))
const MovieDetailContainer = lazy(()=>import('./MovieDetail.container'))
const PersonPage = lazy(()=>import('../Person-Page/Person.page'))



const Movie=({match,cartCategories,hidden,fetchCollectionsStart})=> {

    return (
        <Container>
            <CategoryBar  homeLink='/movies'/>
            {hidden
                ?
                null
                :
                <CategoryCart option="Movie" categories={cartCategories} ></CategoryCart>

            }
            <Suspense fallback={<Spinner/>}>
                <Route exact path={`${match.path}`} component={MovieHome}/>
                <Route path={`${match.path}/category/:collectionId`} component={MovieCollectionContainer}/>
                <Route path={`${match.path}/details/:movieInfo`} component={MovieDetailContainer}/>
                <Route path={`${match.path}/participant/:personInfo`} component={PersonPage} />
            </Suspense>
        </Container>
    )
}

const Container = styled.div`

`

const mapStateToProps = (state)=>({
    cartCategories: selectCartCategories('movies')(state),
    hidden: selectToggleCart(state)
})


export default connect(mapStateToProps)(Movie)