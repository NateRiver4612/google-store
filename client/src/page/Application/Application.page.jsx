import React from 'react'
import ApplicationHome from './ApplicationHome.page';
import ApplicationCollection from './ApplicationCollection.page';
import {Route} from 'react-router-dom'

function Application({match}){
    return (
        <div>
            <Route exact path={`${match.path}`} component={ApplicationHome}/>
            <Route path={`${match.path}/:collectionId`} component={ApplicationCollection}/>
        </div>
    )
}

export default Application;
