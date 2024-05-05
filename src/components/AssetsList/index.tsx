"use client";

import List from "rc-virtual-list";
import { IAssetsListProps } from "./types";
import { useAppSelector, useAppStore } from "@/hooks/redux";
import { useMemo, useRef, useState } from "react";
import { setAssetData } from "@/store/slices/assets";
import Link from "next/link";
import { convertToCommaSeprated } from "@/utils/numberHelper";
import { Header } from "../Header";

export default function AssetsList({ data }: IAssetsListProps) {
  const [term, setTerm] = useState<string>("");
  const store = useAppStore();
  const initialized = useRef(false);

  if (!initialized.current) {
    store.dispatch(setAssetData(data));
    initialized.current = true;
  }

  const { data: assetsData } = useAppSelector(state => state.assets);

  const assetsList = useMemo(() => {
    return assetsData.filter(asset => asset.value.title.includes(term) || asset.value.trade_symbol?.includes(term));
  }, [term]);

  return (
    <>
      <Header value={term} onChange={value => setTerm(value)} />

      <div className="container mx-auto flex flex-col gap-2">
        <div className="p-2 border border-slate-200 h-14 flex items-center gap-4 bg-white font-bold">
          <div className="w-36 truncate">نماد</div>
          <div className="w-96 truncate">نام شرکت</div>
          <div className="w-36 truncate">آخرین قیمت</div>
          <div className="w-36 truncate">ارزش معاملات</div>
        </div>

        <div className="p-2 border border-slate-200 rounded bg-white">
          <List data={assetsList} height={500} itemHeight={56} itemKey="id">
            {asset => (
              <div className="p-2 border-b border-slate-200 h-14 flex items-center gap-4">
                <div className="w-36 truncate" title={asset.value.trade_symbol}>
                  <Link href={`/assets/${asset.entity.id}`} className="text-blue-700">
                    {asset.value.trade_symbol}
                  </Link>
                </div>
                <div className="w-96 truncate">{asset.value.title}</div>
                <div className="w-36 truncate">{convertToCommaSeprated(asset.trades[0]?.value.close_price || 0)}</div>
                <div className="w-36 truncate">{convertToCommaSeprated(asset.trades[0]?.value.value || 0)}</div>
              </div>
            )}
          </List>
        </div>
      </div>
    </>
  );
}
