import { ITrade } from "../store/slices/types";

export async function getTrades(assetId?: string): Promise<ITrade[] | undefined> {
  const response = await fetch(`http://localhost:3000/trades${assetId ? `?asset_id=${assetId}` : ""}`, {
    cache: "no-store",
  });
  if (!response.ok) return undefined;

  const { data } = await response.json();
  return data;
}
