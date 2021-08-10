import React from 'react';
import { connect } from 'react-redux';
import './wishListDropdown.styles.scss'
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import {selectListItems} from '../../redux/wish-list/wishList.selector'
import WishListItem from '../wish-list-item/wishList-Item.component';

const WishListDropdown = ({ history,listItems,dispatch}) => {
  return(
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {listItems.length ? 
        (listItems.map(listItem => {
           const {item,doc} = listItem
           return  <WishListItem  key={item.id} doc= {doc} item={item} />
        })
        ):(
          <span className='empty-message'>Your cart is empty</span>
        )}
    </div>
    <button>
        Go to check out
    </button>
    </div>
);
}

const mapStateToProps = createStructuredSelector({
  listItems:selectListItems
});

export default withRouter(connect(mapStateToProps)(WishListDropdown)); 