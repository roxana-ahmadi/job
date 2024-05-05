"use client";

import { StoreProvider } from "../StoreProvider/StoreProvider";
import { IAppWrapper } from "./types";

export default function AppWrapper({ children }: IAppWrapper) {
  return <StoreProvider>{children}</StoreProvider>;
}
