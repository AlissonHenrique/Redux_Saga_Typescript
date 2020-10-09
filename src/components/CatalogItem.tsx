import React, { useCallback } from 'react';
import { addProductToCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';
import { useDispatch } from "react-redux";

interface ICatalogProps{
  product:IProduct
}
const CatalogItem: React.FC<ICatalogProps> = ({product}) => {
  const dispatch = useDispatch()
  const handleAddProductTocard = useCallback(()=>{
    dispatch(addProductToCart(product))
  },[dispatch, product])

  return (
    <article >
    <strong>{product.title}</strong>{' '}
    <span>{product.price}</span>{' '}
    <button type="button" onClick={handleAddProductTocard} >Comprar</button>
    </article>
  );
}

export default CatalogItem;
