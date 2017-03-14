import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as action from '../metric';
import * as types from '../../constants/actionTypes';

describe('[actions] metric', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should create an action when start fetching page view chart data', () => {
    const expectedAction = {
      type: types.FETCH_PAGE_VIEW_CHART_DATA_REQUEST,
    };
    expect(action.startFetchingPageViewChartData()).toEqual(expectedAction);
  });

  it('should create an action when fetching page view chart data ends', () => {
    const pageViewChartData = [{}, {}];
    const expectedAction = {
      type: types.FETCH_PAGE_VIEW_CHART_DATA_SUCCESS,
      pageViewChartData,
    };
    expect(action.fetchPageViewChartData(pageViewChartData)).toEqual(expectedAction);
  });

  it('creates FETCH_PAGE_VIEW_CHART_DATA when fetching has been done', () => {
    const expectedActions = [
      { type: types.FETCH_PAGE_VIEW_CHART_DATA_REQUEST },
      { type: types.FETCH_PAGE_VIEW_CHART_DATA_SUCCESS,
        pageViewChartData: action.pageViewChartDataMock },
    ];
    const store = mockStore({
      pageViewChartData: [],
      pageViewChartDataLoaded: false,
    });

    store.dispatch(action.fetchPageViewChartDataAction());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
