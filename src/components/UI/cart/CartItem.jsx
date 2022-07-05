import React from 'react';
import { ListGroupItem } from 'reactstrap';
import productImg from '../../../assets/images/product_01.1.jpg';
import '../../../styles/cart-item.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item
 const dispatch = useDispatch();
 const incrementItem = () => {
  dispatch(cartActions.addItem({
    id,
    title,
    price,
    image01,

  }))
 }
 const decreaseItem = () => {
  dispatch(cartActions.removeItem(id))
 }

 const deleteItem = () => {
  dispatch(cartActions.deleteItem(id))

 }
  return (
    <ListGroupItem className='border-0'>
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product img" />
        <div className="cart__product-info d-flex align-items-center gap-4 w-100 justify-content-between">
          <h6 className='cart__product-title'>
            {title}
          </h6>
          <p className='d-flex align-items-center gap-5 cart__product-price'>
            {quantity}x <span>${totalPrice}</span>
          </p>

          <div className='d-flex align-items-center gap-3 increase__decrease-btn justify-content-between'>
            <span className='increase__btn' onClick={incrementItem}>
              <i className='ri-add-line'></i>
            </span>
            <span className='quantity'>{quantity}</span>
            <span className='decrease__btn' onClick={decreaseItem}>
              <i className='ri-subtract-line'></i>
            </span>
          </div>
        </div>

        <span className='delete__btn' onClick={deleteItem}>
          <i className='ri-close-line'></i>
        </span>
      </div>
    </ListGroupItem>
  )
}

export default CartItem
