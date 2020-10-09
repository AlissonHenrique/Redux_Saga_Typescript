import { ActionTypes, IProduct } from './types';

export function addProductToCartRequest(product:IProduct){
  return {
     type: ActionTypes.addProductToCardRequest,
    payload:{
      product
    }
  }
}
export function addProductToCartSuccess(product:IProduct){
  return {
    type: ActionTypes.addProductToCardSuccess,
    payload:{
      product
    }
  }
}

export function addProductToCartFailure(productId:number){
  return {
    type: ActionTypes.addProductToCardFailure,
    payload:{
      productId
    }
  }
}
