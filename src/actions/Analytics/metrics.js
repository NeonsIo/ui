import * as actionTypes from '../../constants/actionTypes';

export const fetchSegmentsRequestAction = website => ({
  type: actionTypes.FETCH_SEGMENTS_REQUEST,
  website,
});

export const fetchSegmentsSuccessAction = segments => ({
  type: actionTypes.FETCH_SEGMENTS_SUCCESS,
  segments,
});

const segmentsMock = [
  {
    id: 'allVisits',
    text: 'All visits',
  }, {
    id: 'pageView',
    text: 'Page views',
  }, {
    id: 'uniqueVisits',
    text: 'Unique visits',
  },
];

export const fetchSegments = website => ((dispatch) => {
  dispatch(fetchSegmentsRequestAction(website));
  dispatch(fetchSegmentsSuccessAction(segmentsMock));
});

export const startFetchingChartDataAction = segment => ({
  type: actionTypes.FETCH_CHART_DATA_REQUEST,
  segment,
});

export const fetchChartDataAction = (chartData, segment) => ({
  type: actionTypes.FETCH_CHART_DATA_SUCCESS,
  chartData,
  segment,
});

export const startFetchingListDataAction = segment => ({
  type: actionTypes.FETCH_LIST_DATA_REQUEST,
  segment,
});

export const fetchListDataAction = (listData, segment) => ({
  type: actionTypes.FETCH_LIST_DATA_SUCCESS,
  listData,
  segment,
});

export const chartDataMock = [
  {
    day: new Date(2017, 1, 1),
    amount: 10,
  },
  {
    day: new Date(2017, 1, 2),
    amount: 12,
  },
  {
    day: new Date(2017, 1, 3),
    amount: 15,
  },
  {
    day: new Date(2017, 1, 4),
    amount: 12,
  },
  {
    day: new Date(2017, 1, 5),
    amount: 15,
  },
  {
    day: new Date(2017, 1, 6),
    amount: 15,
  },
  {
    day: new Date(2017, 1, 7),
    amount: 16,
  },
  {
    day: new Date(2017, 1, 8),
    amount: 12,
  },
  {
    day: new Date(2017, 1, 9),
    amount: 10,
  },
  {
    day: new Date(2017, 1, 10),
    amount: 12,
  },
  {
    day: new Date(2017, 1, 11),
    amount: 15,
  },
  {
    day: new Date(2017, 1, 12),
    amount: 9,
  },
  {
    day: new Date(2017, 1, 13),
    amount: 5,
  },
  {
    day: new Date(2017, 1, 14),
    amount: 6,
  },
  {
    day: new Date(2017, 1, 15),
    amount: 4,
  },
  {
    day: new Date(2017, 1, 16),
    amount: 5,
  },
  {
    day: new Date(2017, 1, 17),
    amount: 5,
  },
  {
    day: new Date(2017, 1, 18),
    amount: 6,
  },
  {
    day: new Date(2017, 1, 19),
    amount: 12,
  },
  {
    day: new Date(2017, 1, 20),
    amount: 11,
  },
  {
    day: new Date(2017, 1, 21),
    amount: 10,
  },
  {
    day: new Date(2017, 1, 22),
    amount: 12,
  },
  {
    day: new Date(2017, 1, 23),
    amount: 15,
  },
  {
    day: new Date(2017, 1, 24),
    amount: 12,
  },
];

export const listDataMock = [
  {
    timestamp: new Date(2017, 1, 1, 1, 1, 1),
    country: 'PL',
    os: 'Mac OS',
    returningVisitor: false,
  }, {
    timestamp: new Date(2017, 1, 1, 1, 2, 13),
    country: 'US',
    os: 'Mac OS',
    returningVisitor: false,
  }, {
    timestamp: new Date(2017, 1, 1, 1, 2, 50),
    country: 'RU',
    os: 'Mac OS',
    returningVisitor: false,
  }, {
    timestamp: new Date(2017, 1, 1, 1, 4, 60),
    country: 'PL',
    os: 'Mac OS',
    returningVisitor: true,
  }, {
    timestamp: new Date(2017, 1, 1, 1, 5, 1),
    country: 'PL',
    os: 'Mac OS',
    returningVisitor: false,
  }, {
    timestamp: new Date(2017, 1, 1, 1, 6, 19),
    country: 'GB',
    os: 'Linux',
    returningVisitor: false,
  }, {
    timestamp: new Date(2017, 1, 1, 3, 1, 1),
    country: 'PL',
    os: 'Mac OS',
    returningVisitor: true,
  }, {
    timestamp: new Date(2017, 1, 1, 3, 6, 19),
    country: 'DE',
    os: 'Windows',
    returningVisitor: false,
  }, {
    timestamp: new Date(2017, 1, 1, 4, 4, 1),
    country: 'PL',
    os: 'Mac OS',
    returningVisitor: false,
  }, {
    timestamp: new Date(2017, 1, 1, 19, 2, 34),
    country: 'US',
    os: 'Mac OS',
    returningVisitor: true,
  }, {
    timestamp: new Date(2017, 1, 1, 20, 4, 12),
    country: 'IT',
    os: 'Mac OS',
    returningVisitor: false,
  }, {
    timestamp: new Date(2017, 1, 1, 23, 5, 13),
    country: 'FR',
    os: 'Windows',
    returningVisitor: false,
  },
];

export const fetchChartData = segment => ((dispatch) => {
  dispatch(startFetchingChartDataAction(segment));
  dispatch(fetchChartDataAction(chartDataMock, segment));
});

export const fetchListData = segment => ((dispatch) => {
  dispatch(startFetchingListDataAction(segment));
  dispatch(fetchListDataAction(listDataMock, segment));
});
