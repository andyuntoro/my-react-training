import { createStore } from "redux";
import TrfReducer from "./TransferApps/reducer";

const store = createStore(TrfReducer)

export default store