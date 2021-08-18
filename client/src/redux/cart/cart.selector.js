import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const  selectCart = state =>state.cart

export const selectCartCategories = memoize(option=> createSelector(
    [selectCart],
    cart => cart.cartCategories[option]
));

export const selectToggleCart = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCurrentCart = createSelector(
    [selectCart],
    cart => cart.currentCart
)



