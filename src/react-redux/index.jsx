import { Provider } from "react-redux";
import store from "./store";
import TransferRedux from "./TransferApps";

export default function ReactRedux() {
    return (
        <Provider store = {store}>
            <TransferRedux />
        </Provider>
    )
}