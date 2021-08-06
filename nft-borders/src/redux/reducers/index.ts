import { combineReducers } from "redux";
import user from "./user";
import detailsNFT from "./detailsNFT";
import emailUser from "./emailUser";
export default combineReducers({
    user,
    detailsNFT,
    emailUser
})