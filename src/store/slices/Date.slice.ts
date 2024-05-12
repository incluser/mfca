import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateState {
  from: Date | null;
  to: Date | null;
}

const initialState: DateState = {
  from: null,
  to: null,
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<Date>) => {
      state.from = action.payload;
    },
    setEndDate: (state, action: PayloadAction<Date>) => {
      state.to = action.payload;
    },
  },
});

export const { setStartDate, setEndDate } = dateSlice.actions;

export default dateSlice.reducer;
