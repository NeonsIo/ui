import reducer from '../../reducers/metric';
import * as types from '../../constants/actionTypes';

describe('[reducer] metric', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual({
      pageViewChartData: [],
      pageViewChartDataLoaded: false,
    });
  });

  it('should handle FETCH_PAGE_VIEW_CHART_DATA_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.FETCH_PAGE_VIEW_CHART_DATA_SUCCESS,
        pageViewChartData: [{}, {}],
      }),
    ).toEqual({
      pageViewChartData: [{}, {}],
      pageViewChartDataLoaded: true,
    });
  });
});
