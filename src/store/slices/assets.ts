import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAssetState, IData } from "./types";

const initialState: IAssetState = {
  data: [],
};

export const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    setAssetData: (state, action: PayloadAction<IData[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setAssetData } = assetsSlice.actions;

export default assetsSlice.reducer;
