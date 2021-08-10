import {takeEvery,takeLatest,call,all, put} from 'redux-saga/effects';
import StoreActionTypes from './store.type';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './store.action';


export function* fetchCollectionAll(){
    const collectionRef = firestore.collection('store')

    try{
        const snapShot = yield collectionRef.get()
        const Items = convertCollectionsSnapshotToMap(snapShot)

        yield put(fetchCollectionSuccess(Items))   
        console.log(Items)
     
    }catch(error){

    }
}
export function* onfetchCollectionsStart(){
    yield takeLatest(StoreActionTypes.FETCH_COLLECTION_START, fetchCollectionAll);
}

export function * storeSaga(){
    yield all([call(onfetchCollectionsStart)])
}




