import * as actionTypes from '../../constants/actionTypes';

const initialState = {
  segments: [],
  segmentsLoaded: false,
  chartData: [],
  chartDataLoaded: false,
  listData: [],
  listDataLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEGMENTS_SUCCESS:
      return { ...state,
        segments: action.segments,
        segmentsLoaded: true,
      };
    case actionTypes.FETCH_CHART_DATA_SUCCESS:
      return { ...state,
        chartData: action.chartData,
        chartDataLoaded: true,
      };
    case actionTypes.FETCH_LIST_DATA_SUCCESS:
      return { ...state,
        listData: action.listData,
        listDataLoaded: true,
      };
    default:
      return state;
  }
};
