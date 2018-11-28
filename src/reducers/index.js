import { combineReducers } from "redux";
import onLoad from "./onload";
import currentLocation from "./currentLocation";
import myNotes from "./myNotes";
import addNotes from "./addNotes";
import addNotesModal from "./addNotesModal";
import searchNotes from "./searchNotes";
export default combineReducers({
  onLoad,
  currentLocation,
  myNotes,
  addNotes,
  addNotesModal,
  searchNotes
});
