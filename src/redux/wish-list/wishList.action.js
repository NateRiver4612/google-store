import wishListActionType from "./wishList.type"

export const addItem = (item)=>({
    type:wishListActionType.ADD_ITEM,
    payload:item
})

export const toggleList = ()=>({
    type:wishListActionType.TOGGLE_LIST_HIDDEN
})



