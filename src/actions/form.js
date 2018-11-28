import * as types from "../constants/actionTypes";

export const addNotesModal = payload => dispatch => {
  dispatch({
    type: types.ADD_NOTES_MODAL,
    payload
  });
};

export const handleChange = event => dispatch => {
  dispatch({
    type: types.HANDLE_CHANGE,
    payload: {
      name: event.target.name,
      value: event.target.value
    }
  });
};
