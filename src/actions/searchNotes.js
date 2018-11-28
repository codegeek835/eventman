import * as types from "../constants/actionTypes";
const searchNotes = payload => dispatch => {
  dispatch({
    type: types.SEARCH_NOTES,
    payload: {
      searchNotesText: payload.searchNotesText,
      searchData: payload.searchData
    }
  });
};
export default searchNotes;
