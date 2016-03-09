import { Effects, loop } from 'redux-loop';
import { push } from 'react-router-redux';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux-loop';
import * as ActionTypes from '../actionTypes';

const initialState = {
  isFetching: false,
  statusText: null,
  error: null,
  lastUpdated: null
};

function entities(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SWITCH_PAGE:
      return loop(
        { ...state, isFetching: true },
        Effects.constant(push(action.payload.page))
      );
  }
}
  
export default combineReducers({
  entities,
  routing: routerReducer
});
