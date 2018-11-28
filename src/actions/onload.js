import * as types from "../constants/actionTypes";

const DefaultData = payload => dispatch => {
  dispatch({
    type: types.ON_LOAD,
    payload
  });
};
export default DefaultData;
