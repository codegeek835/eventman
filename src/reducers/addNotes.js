import { HANDLE_CHANGE } from "../constants/actionTypes";

const initialState = {
  formData: {
    userName: "",
    title: "Please add note Title",
    des: "Please add note Description",
    position: {
      lat: 28.615233399999997,
      lng: 77.3611437
    }
  }
};

const addNotes = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE: {
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value
        }
      };
    }
    default:
      return state;
  }
};
export default addNotes;
