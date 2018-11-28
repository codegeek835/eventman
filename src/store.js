import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import creatLogger from "redux-logger";
import rootReducer from "./reducers";

const middleware = [thunk];
middleware.push(creatLogger);

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
