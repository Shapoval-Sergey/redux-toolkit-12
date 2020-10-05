import { configureStore } from "@reduxjs/toolkit";

import timerReducer from "../redux/timer/timerReducer";

const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export default store;
