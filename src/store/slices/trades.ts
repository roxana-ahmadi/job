import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITradeState, IData } from "./types";

const initialState: ITradeState = {
  data: [],
};

export const tradesSlice = createSlice({
  name: "trades",
  initialState,
  reducers: {
    setTradeData: (state, action: PayloadAction<IData[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setTradeData } = tradesSlice.actions;

export default tradesSlice.reducer;
