import { Reducer } from "react";

import { ICartState,ICartItem } from "./types";
import produce from 'immer'
const INITIAL_STATE: ICartState = {
  items: [],
};
interface IAction{
  type: string;
  payload:ICartItem;
}


const cart: Reducer<ICartState,IAction> = (state = INITIAL_STATE,action) => {
  return produce(state,  draft =>{

  switch(action.type){
      case'ADD_PRODUCT_TO_CART':{
        const { product } = action.payload
        const producInIndex = draft.items.findIndex(item =>
          item.product.id  === product.id
          );

        if(producInIndex >=0){
            draft.items[producInIndex].quantity++;
        }else{
          draft.items.push({
            product,
            quantity:1
           })
          }
          break

      }
      default : {
        return draft;
      }
  }
})
};
export default cart;
