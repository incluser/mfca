import { configureStore } from "@reduxjs/toolkit";
import AirplaneReducer from "./slices/Airplane.slice";
import HouseHoldReducer from "./slices/Household.slice";
import PrivateReducer from "./slices/Private.slice";
import PublicReducer from "./slices/Public.slice";
import SecondaryReducer from "./slices/Secondary.slice";
import DateReducer from "./slices/Date.slice";
export const store = configureStore({
  reducer: {
    House: HouseHoldReducer,
    Private: PrivateReducer,
    Airplane: AirplaneReducer,
    Public: PublicReducer,
    Secondary: SecondaryReducer,
    Date: DateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
