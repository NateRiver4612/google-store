import { all,call } from "redux-saga/effects";
import {storeSaga} from './store/store.saga'
import { itemSaga } from "./Item/item.saga";
import { userSaga } from "./user/user.saga";
import { personSaga } from "./person/person.saga";
export default function* rootSaga(){
    yield all([call(storeSaga),call(itemSaga),call(userSaga),call(personSaga)])
}
