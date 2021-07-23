import actions from './actions'
import PRODUCTS from '../../data/products.json'
import RODUCT_GROUPS from '../../data/product_groups.json'
import SHELFS from '../../data/shelfs.json'

const initialState = {
  productList: PRODUCTS,
  product_groups: RODUCT_GROUPS,
  shelfs: SHELFS
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
