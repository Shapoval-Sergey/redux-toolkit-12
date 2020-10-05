import { INCREMENT, DECREMENT, CHANGE_STEP } from "./timerTypes";
import { createAction } from "@reduxjs/toolkit";

const increment = createAction(INCREMENT);
const decrement = createAction(DECREMENT);
const changeStep = createAction(CHANGE_STEP);

export default { increment, decrement, changeStep };
