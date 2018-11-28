import { ON_LOAD } from "../constants/actionTypes";

const initialState = {
  NotesData: []
};

const NotesData = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case ON_LOAD:
      return {
        NotesData: action.payload.NotesData
      };
    default:
      return state;
  }
};
export default NotesData;
