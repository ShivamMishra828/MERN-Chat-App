import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/app";

// Slices
const rootPeristConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    // Whitelist: [],
    // Blacklist: [],
}

const rootReducer = combineReducers({
    app: appReducer,
});

export { rootPeristConfig, rootReducer };