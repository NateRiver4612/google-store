import {combineReducers} from 'redux'
import navbarReducer from './navbar/navbar.reducer'
import storeReducer from './store/store.reducer';
import cartReducer from './cart/cart.reducer';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import itemReducer from './Item/item.reducer'
import userReducer from './user/user.reducer';
import wishListReducer from './wish-list/wishList.reducer';
import personReducer from './person/person.reducer'
const persistConfig ={
    key:'root',
    storage,
    whitelist:['navbar','item','store','wishList','cart','person']
}

const rootReducer = combineReducers({
    navbar: navbarReducer,
    store:storeReducer,
    cart:cartReducer,
    item:itemReducer,
    user:userReducer,
    person:personReducer,
    wishList:wishListReducer
});

export default  persistReducer(persistConfig,rootReducer);