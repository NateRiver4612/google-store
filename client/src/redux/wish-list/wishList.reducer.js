import wishListActionType from "./wishList.type";
import {addItemToList, removeItemFromList} from './wishList.utils'
const INITIAL_STATE = {
  hidden: true,
  listItems: []
};

const wishListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wishListActionType.ADD_ITEM:
      return{
          ...state,
          listItems:addItemToList(state.listItems,action.payload)
      }
    case wishListActionType.REMOVE_ITEM:
      return{
        ...state,
        listItems:removeItemFromList(state.listItems,action.payload)
      }
    case wishListActionType.TOGGLE_LIST_HIDDEN:
      return{
        ...state,
        hidden:!state.hidden
      }
    default:
      return state;
  }
};

export default wishListReducer;