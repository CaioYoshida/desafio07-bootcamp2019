import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const productAlreadyExists = draft.findIndex(
          p => p.id === action.item.id
        );

        // we don't use just if(productAlreadyExists) beacause...
        // ...productAlreadyExists represents an index which could be zero
        if (productAlreadyExists >= 0) {
          draft[productAlreadyExists].amount += 1;
        } else {
          draft.push({
            ...action.item,
            amount: 1,
          });
        }
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0 && action.amount > 0) {
          draft[productIndex].amount = action.amount;
        }
      });
    default:
      return state;
  }
}
