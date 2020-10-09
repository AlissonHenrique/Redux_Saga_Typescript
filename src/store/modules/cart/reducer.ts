import { Reducer } from "react";

import { ICartState,ICartItem, ActionTypes } from "./types";
import produce from 'immer'
const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck:[]
};
interface IAction{
  type: string;
  payload:ICartItem;
}


const cart: Reducer<ICartState,IAction> = (state = INITIAL_STATE,action) => {
  return produce(state,  draft =>{

  switch(action.type){
      case ActionTypes.addProductToCardSuccess:{
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
          break;

      }
      case ActionTypes.addProductToCardFailure:{
          draft.failedStockCheck.push(action.payload.productId)
        console.log(action.payload.productId)
        break;
      }
      default : {
        return draft;
      }
  }
})
};
export default cart;
