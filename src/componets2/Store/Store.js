import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import reducer from "./Reducer"
import CombineReducers from "./Reducers/CombineReducers";


const mystore = createStore(CombineReducers, composeWithDevTools())


export default mystore