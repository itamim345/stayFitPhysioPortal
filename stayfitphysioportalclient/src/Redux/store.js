import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from 'redux';
import { userSlice } from "./userSlice";
import { alertsSlice } from "./alertReducers";

const rootReducer = combineReducers ({
    user: userSlice.reducer,
    alerts : alertsSlice.reducer
})

const store = configureStore({
  reducer: rootReducer,
});

export default store;
