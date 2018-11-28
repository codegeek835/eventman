import { ADD_NOTES_MODAL } from "../constants/actionTypes";

const initialState = {
  show: false
};

const addNotesModal = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTES_MODAL:
      return {
        show: action.payload
      };
    default:
      return state;
  }
};
export default addNotesModal;
