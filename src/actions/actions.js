import * as ActionTypes from '../actionTypes';

export function switchPage(page) {
  return {
    type: ActionTypes.SWITCH_PAGE,
    payload: { page }
  };
}
