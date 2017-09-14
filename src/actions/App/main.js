import * as actionTypes from '../../constants/actionTypes';

export const fetchProductsRequestAction = () => ({
  type: actionTypes.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccessAction = products => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  products,
});

export const fetchWebsitesRequestAction = () => ({
  type: actionTypes.FETCH_WEBSITES_REQUEST,
});

export const fetchWebsitesSuccessAction = websites => ({
  type: actionTypes.FETCH_WEBSITES_SUCCESS,
  websites,
});

const productsMock = [
  {
    id: 'analytics',
    text: 'Data analytics',
  }, {
    id: 'tag-manager',
    text: 'Tag management',
  },
];
const websitesMock = [
  {
    uuid: '123432-423423-42342-32',
    domain: 'letsgample.com',
  }, {
    uuid: '123344-444423-42342-34',
    domain: 'freecheaps.com',
  },
];

export const fetchProducts = () => ((dispatch) => {
  dispatch(fetchProductsRequestAction());
  dispatch(fetchProductsSuccessAction(productsMock));
});

export const fetchWebsites = () => ((dispatch) => {
  dispatch(fetchWebsitesRequestAction());
  dispatch(fetchWebsitesSuccessAction(websitesMock));
});
