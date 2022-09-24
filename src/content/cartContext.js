import React, { useContext } from 'react';

import {func, string, number, oneOf, arrayOf, any, shape} from 'prop-types'

const CartContext = React.createContext();

export const CartProvider = ({value, children} ) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
CartProvider.propTypes = {
  value: shape({
    title : string,
    products : arrayOf([
      oneOf([null]),
      shape({
        id : number, 
        photo : any, 
        name : string, 
        price : number, 
        amount : number, 
        maxAmount : number
      }),
    ]),
    totalPrice: number,
    handleUpdateAmount: func,
  }),
  children: any,
}
export const useCart =() =>{
  const value = useContext(CartContext);
  if(!value){
    throw new Error(
      'useCart 훅은 CartContext 컴포넌트 내부에서만 사용 가능합니다.'
    );
  }
  return value;
};