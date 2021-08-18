import { call,all ,takeLatest, put} from "@redux-saga/core/effects";
import UserActionTypes from "./user.type";
import {signInSuccess, signInFailure} from '../../redux/user/user.action'
import { provider,auth ,createUserProfileDocument} from "../../firebase/firebase.utils";

export function* googleSignIn(){
    try{
         const {user}  = yield auth.signInWithPopup(provider)
         const userRef = yield call(createUserProfileDocument,user)
         const userSnapShot = yield userRef.get()

         yield put(signInSuccess({id:userSnapShot.id,...userSnapShot.data()}))
    }catch(error){
        yield put(signInFailure(error.message))
    }
}   

export function * onSignInWithGoogle(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,googleSignIn)
}


export function * userSaga(){
    yield all([call(onSignInWithGoogle)])
}