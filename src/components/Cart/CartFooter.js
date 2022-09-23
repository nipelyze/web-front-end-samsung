/* eslint-disable react/react-in-jsx-scope */
// import { number } from 'prop-types';
import CartTotal from './CartTotal';
import { useCart } from '../../content/cartContext';

const CartFooter = ({ ...restProps }) => {
  const {carts:{totalPrice}} = useCart();

  return (
  <footer {...restProps}>
    <CartTotal>{totalPrice}</CartTotal>
  </footer>
)};

export default CartFooter;