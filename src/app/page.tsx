import { getTrades } from "@/apis/getTrades";
import { getAssets } from "@/apis/getAssets";
import AssetsList from "@/components/AssetsList";

export default async function HomeNextPage() {
  const trades = await getTrades();
  const assets = await getAssets();

  if (!trades || !assets) return <div>Error</div>;

  assets.forEach(asset => {
    const foundTrades = trades.filter(trade => asset.entity.id === trade.entity.id);
    asset.trades = foundTrades;
  });

  return (
    <main className="">
      <AssetsList data={assets} />
    </main>
  );
}
