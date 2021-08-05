import { combineReducers } from "redux";
import user from "./user"
import detailsNFT from "./detailsNFT"
export default combineReducers({
    user,
    detailsNFT
})