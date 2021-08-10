import React,{useEffect} from 'react';
import Header from './component/header/header.component'
import { Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './component/navbar/navbar.component'
import Entertainment from './page/Entertainment/Entertainment.page'
import Application from './page/Application/Application.page';
import Movie from './page/Movie/Movie.page'
import Book from './page/Book/Book.page'
import MovieCollection from './page/Movie/MovieCollection.page'
import CategoryBar from './component/category-bar/CategoryBar.component';
import {fetchCollectionsStart} from './redux/store/store.action'
import {connect} from 'react-redux'
import { firestore } from './firebase/firebase.utils';

const App = ({fetchCollectionsStart})=>{

    useEffect(() => {
      fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return(
      <Container>
         <Header/>
         <AppWrapper>
          <NavWrapper>
              <NavBar/>
          </NavWrapper>
          <SwitchWrapper>
            <Switch>
              <Route  path='/entertainments' component={Entertainment} />
              <Route  path='/applications' component={Application} />
              <Route path='/movies' component={Movie} />
              <Route  path='/books' component={Book} />
            </Switch>
          </SwitchWrapper> 
         </AppWrapper> 
      </Container>
    )
}

const NavWrapper = styled.div`
  z-index:1;
`
const SwitchWrapper = styled.div`
  height: calc(100vh - 60px);
  width: calc(100vw - 14vw);
  overflow-y: auto;
`
const AppWrapper = styled.div`
  display: flex;
`

const Container = styled.div`
   background-color: #eeeeee;
   bottom:0px;
   min-height: 100vh;
`

const mapDispatchToProps = dispatch=>({
    fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(App);
