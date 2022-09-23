/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styled from 'styled-components/macro';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { func } from 'prop-types';
import { useCart } from '../../content/cartContext';

export default function CartList() {
  const {carts: {products}} = useCart();
  console.log(products);
  return (
    <Container>
      
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <CartFooter/>
    </Container>
  );
}

CartList.propTypes = {
  onUpdate: func,
};

/* -------------------------------------------------------------------------- */

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
