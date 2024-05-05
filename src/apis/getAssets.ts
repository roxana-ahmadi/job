import { IAsset } from "../store/slices/types";

export async function getAssets(id?: string): Promise<IAsset[] | undefined> {
  const response = await fetch(`http://localhost:3000/assets${id ? `/${id}` : ""}`, { cache: "no-store" });
  if (!response.ok) return undefined;

  const { data } = await response.json();
  return data;
}
