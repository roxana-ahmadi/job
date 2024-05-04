import { Suspense } from "react";
import { getTrades } from "@/apis/getTrades";
import HomePageTable from "@/components/HomePageTable";
import { getAssets } from "@/apis/getAssets";

export default async function Home() {
  const trades = await getTrades();
  const assets = await getAssets();

  if (!trades || !assets) return <div>error</div>;

  trades.forEach(trade => {
    const foundAssets = assets.filter(asset => asset.id === trade.entity.id);
    trade.assets = foundAssets;
  });

  return (
    <main className="">
      <Suspense>
        <HomePageTable data={trades} />
      </Suspense>
    </main>
  );
}
