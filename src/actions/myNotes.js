import * as types from "../constants/actionTypes";
const myNotesAction = payload => dispatch => {
  dispatch({
    type: types.MY_NOTES_ACTION,
    payload
  });
};
export default myNotesAction;
