import { SEARCH_NOTES } from "../constants/actionTypes";
const initialState = {
  searchNotesText: "",
  searchData: []
};

const searchNotes = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_NOTES: {
      return {
        searchNotesText: action.payload.searchNotesText,
        searchData: action.payload.searchData
      };
    }
    default:
      return state;
  }
};
export default searchNotes;
