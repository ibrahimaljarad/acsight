// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports

import smsReducer from "../components/sms/store/reducers";

const rootReducer = combineReducers({
  smsReducer,
});

export default rootReducer;
