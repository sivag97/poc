//reducers
import { combineReducers } from "redux";
const songReducer = () => {
  return [
    { title: "gotta go", duration: "4:24" },
    { title: "breakit up", duration: "4:02" },
    { title: "Dangerous", duration: "2:46" },
    { title: "sparkles", duration: "4:00" }
  ];
};

const songSelectReducer = (songSelect = null, action) => {
  if (action.type === "CREATE_SONG") {
    return action.payload;
  }
  return songSelect;
};

export default combineReducers({
  song: songReducer,
  songSelect: songSelectReducer
});
