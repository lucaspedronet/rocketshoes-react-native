import produce from 'immer'

export default function cart(state=[], action) {
  console.log(action)
  switch(action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        draft.push(action.product)
      })

    case '@cart/ADD_REQUEST':
      return

    case '@cart/REMOVE':
      return {

      }

    case '@cart/UPDATE_AMOUNT':
      return

    default:
      return state;
  }
}
