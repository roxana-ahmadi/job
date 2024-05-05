import { getTrades } from "@/apis/getTrades";
import { getAssets } from "@/apis/getAssets";
import AssetDetail from "@/components/AssetDetail";

export default async function AssetDetailNextPage({ params: { id } }: { params: { id: string } }) {
  const trades = await getTrades(id);
  const assets = await getAssets(id);

  if (!trades || !assets || assets.length === 0) return <div>Error</div>;

  const asset = assets[0];
  asset.trades = trades;

  return (
    <main className="">
      <AssetDetail data={asset} id={id} />
    </main>
  );
}
