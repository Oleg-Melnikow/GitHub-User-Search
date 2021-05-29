import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./appReducer";
import {settingsReducer} from "./settingsReducer";

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>

let rootReducer = combineReducers({
    app: appReducer,
    settings: settingsReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;