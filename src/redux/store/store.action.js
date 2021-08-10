import StoreActionTypes from './store.type'
import {firestore} from '../../firebase/firebase.utils'
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'


export const fetchCollectionsStart = ()=> ({
    type: StoreActionTypes.FETCH_COLLECTION_START,
});


export const fetchCollectionSuccess = (collection) =>({
    type:StoreActionTypes.FETCH_COLLECTION_SUCCESS,
    payload : collection
})

export const fetchCollectionFailure = (errorMessage)=>({
    type:StoreActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage.message
})


export const fetchCollectionAsync = (document)=>{
    return dispatch=>{
        const collectionRef = firestore.collection('store');

        dispatch(fetchCollectionsStart());

        collectionRef.doc(document).get().then(snapShot=>{
            const {categories} = snapShot.data()
            const collectionMap = convertCollectionsSnapshotToMap(categories)
            dispatch(fetchCollectionSuccess(collectionMap))
        }).catch(error=>dispatch(fetchCollectionFailure(error.message)))

}
}


