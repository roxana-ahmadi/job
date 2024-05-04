import { IData } from "../store/slices/types";

export async function getAssets(): Promise<IData[] | undefined> {
  const response = await fetch("http://localhost:3000/assets", { cache: "no-store" });
  if (!response.ok) return undefined;

  const { data } = await response.json();
  return data;
}
