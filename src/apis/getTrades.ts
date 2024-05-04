import { ITrades } from "../store/slices/types";

export async function getTrades(): Promise<ITrades[] | undefined> {
  const response = await fetch("http://localhost:3000/trades", { cache: "no-store" });
  if (!response.ok) return undefined;

  const { data } = await response.json();
  return data;
}
