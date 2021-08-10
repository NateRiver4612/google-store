import React,{useEffect} from 'react'
import BookHome from './BookHome.page'
import {Route} from 'react-router-dom'
import BookCollection from './BookCollection.page'
import WithSpinner from '../../component/with-spinner/with-spinner.component'
import { selectCartCategories } from '../../redux/cart/cart.selector'
import { connect } from 'react-redux'
import { selectToggleCart } from '../../redux/cart/cart.selector'
import CategoryBar from '../../component/category-bar/CategoryBar.component'
import CategoryCart from '../../component/category-bar/CategoryCart.component'
import { fetchCollectionsStart } from '../../redux/store/store.action'
import BookCollectionContainer from './BookCollection.container'
import BookDetail from './BookDetail.page'

const Book=({match,cartCategories,fetchCollectionsStart,hidden})=>{
    // useEffect(() => {
    //     fetchCollectionsStart('book')
    // }, [])
    return (
        <div>
            <CategoryBar  homeLink='/books'/>
            {hidden
                ?
                null
                :
                <CategoryCart option="Book" categories={cartCategories} ></CategoryCart>

            }
            <Route exact path={`${match.path}`} component={BookHome}/>
            <Route path={`${match.path}/category/:collectionId`} component={BookCollectionContainer}/>
            <Route path={`${match.path}/details/:bookInfo`} component={BookDetail}/>
        </div>
    )
}

const mapStateToProps = (state)=>({
    cartCategories: selectCartCategories('books')(state),
    hidden: selectToggleCart(state)
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart:(doc)=>dispatch(fetchCollectionsStart(doc))
});

export default connect(mapStateToProps,mapDispatchToProps)(Book);
