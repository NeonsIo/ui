import * as actionTypes from '../../constants/actionTypes';

export const fetchProductsRequest = () => ({
  type: actionTypes.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = products => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  products,
});

export const fetchWebsitesRequest = () => ({
  type: actionTypes.FETCH_WEBSITES_REQUEST,
});

export const fetchWebsitesSuccess = websites => ({
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

export const fetchProductsAction = () => ((dispatch) => {
  dispatch(fetchProductsRequest());
  dispatch(fetchProductsSuccess(productsMock));
});

export const fetchWebsitesAction = () => ((dispatch) => {
  dispatch(fetchWebsitesRequest());
  dispatch(fetchWebsitesSuccess(websitesMock));
});
