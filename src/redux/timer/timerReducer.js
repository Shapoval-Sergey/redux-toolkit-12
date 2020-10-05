import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./timerActions";

const valueReducer = createReducer(0, {
  [actions.increment]: (state, action) => state + action.payload,
  [actions.decrement]: (state, action) =>
    state - action.payload < 0 ? state : state - action.payload,
});

const stepReducer = createReducer(5, {
  [actions.changeStep]: (state, action) => Number(action.payload),
});

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
