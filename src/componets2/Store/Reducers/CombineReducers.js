import { combineReducers } from "redux";
import LangReducer from "./LangReducer";
import LoaderReducer from "./LoaderReducer";
import ThemeReducer from "./ThemeReducer";
import CardReducer from './CardReducer'
import ObjectReducer from './ObjectReducer'
import GITNEWDATA from './gitdata'




export default combineReducers({
   Rlang: LangReducer,
    Rtheme: ThemeReducer,
    Rloader: LoaderReducer,
    RInc_Cards: CardReducer,
    RObjectReducer:ObjectReducer,
    RGITNEWDATA:GITNEWDATA

})