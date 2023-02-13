import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import siteReducer from "./reducer/siteReducer";
import userReducer from "./reducer/userReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";



const rootReducer = combineReducers({
    site: siteReducer,
    user: userReducer
});

const persistConfig = {
    key: "context",
    storage: AsyncStorage,
    blacklist: ["user"]
};
// middleware
const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating store
export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => persistStore(store);
