import UserActionTypes from "./user.type";

export const signInWithGoggleStart = ()=>({
    type:UserActionTypes.GOOGLE_SIGN_IN_START
})

export const signInSuccess = (user)=>({
    type:UserActionTypes.SIGN_IN_SUCCESS,
    payload:user
})

export const signInFailure = (error)=>({
    type:UserActionTypes.SIGN_IN_FAILURE,
    payload:error
})