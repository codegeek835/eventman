import * as types from "../constants/actionTypes";

const currentLocation = payload => dispatch => {
  // debugger;
  dispatch({
    type: types.CURRENT_LOCATION,
    payload
  });
};
export default currentLocation;
