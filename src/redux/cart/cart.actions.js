import CartActionTypes from './cart.types';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


export const toggleCartHidden = ()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});

export const selectCart =(category)=>({
    type:CartActionTypes.SELECT_CART,
    payload:category
})




 