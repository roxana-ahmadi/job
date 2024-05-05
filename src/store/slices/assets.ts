import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAsset, IAssetState } from "./types";

const initialState: IAssetState = {
  data: [],
};

export const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    setAssetData: (state, action: PayloadAction<IAsset[]>) => {
      state.data = action.payload;
    },
    setIndividualAssetData: (state, action: PayloadAction<IAsset>) => {
      if (!state.data.some(asset => asset.id === action.payload.id)) {
        state.data = [...state.data, action.payload];
      }
    },
  },
});

export const { setAssetData, setIndividualAssetData } = assetsSlice.actions;

export default assetsSlice.reducer;
