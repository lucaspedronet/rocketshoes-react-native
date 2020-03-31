import produce from 'immer'

export default function cart(state=[], action) {
  switch(action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        draft.push(action.product)
      })
    case '@cart/REMOVE_SUCCESS':
      return produce(state,(draft) => {
        const productExist = draft.findIndex(product => product.id === action.id)

        if(productExist >= 0) {
          draft.splice(productExist, 1)
        }
      })

    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, (draft) => {
        const productExists = draft.findIndex(product => product.id === action.id)

        if(productExists >= 0) {
          draft[productExists].amount = Number(action.amount)
        }
      })

    default:
      return state;
  }
}
