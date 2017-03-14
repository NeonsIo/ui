import * as actionTypes from '../../constants/actionTypes';

const initialState = {
  products: [],
  productsLoaded: false,
  websites: [],
  websitesLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state,
        products: action.products,
        productsLoaded: true,
      };
    case actionTypes.FETCH_WEBSITES_SUCCESS:
      return { ...state,
        websites: action.websites,
        websitesLoaded: true,
      };
    default:
      return state;
  }
};
