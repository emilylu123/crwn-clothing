import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// scalable
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// import to index.js - <Provider store={store}>...</Provider>
export default store;
