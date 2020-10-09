import React, { useCallback } from 'react';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';
import { useDispatch, useSelector } from "react-redux";
import { IState } from '../store';

interface ICatalogProps{
  product:IProduct
}
const CatalogItem: React.FC<ICatalogProps> = ({product}) => {
  const dispatch = useDispatch()
  const handleAddProductTocard = useCallback(()=>{
    dispatch(addProductToCartRequest(product))
  },[dispatch, product])

  const hasFailureStockCheck = useSelector<IState,boolean>(state =>{
    return state.cart.failedStockCheck.includes(product.id)
  })

  return (
    <article >
    <strong>{product.title}</strong>{' '}
    <span>{product.price}</span>{' '}
    <button type="button" onClick={handleAddProductTocard} >Comprar</button>
    { hasFailureStockCheck && <span style={{color:'red'}}>Faltaa de stock</span>}
    </article>
  );
}

export default CatalogItem;
