import { createSelector } from 'reselect';

const selectWishList = state =>state.wishList 

export const selectListItems = createSelector(
    [selectWishList],
    wishList => wishList.listItems
)

export const selectListItemCount = createSelector(
    [selectListItems],
    listItems => listItems ? listItems.length : 0  
)

export const selectListHidden = createSelector(
    [selectWishList],
    wishList => wishList.hidden
)

