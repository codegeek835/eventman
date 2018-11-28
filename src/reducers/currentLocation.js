import { CURRENT_LOCATION } from "../constants/actionTypes";
const initialState = {
  markers: {
    title: "Please add note Title",
    des: "Please add note Description",
    position: {
      lat: 28.615233399999997,
      lng: 77.3611437
    }
  }
};
const currentLocation = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_LOCATION:
      return {
        markers: {
          ...state.markers,
          position: action.payload.position
        }
      };
    default:
      return state;
  }
};
export default currentLocation;
