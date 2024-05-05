"use client";

import { IAssetDetailProps } from "./types";
import { useAppSelector, useAppStore } from "@/hooks/redux";
import { useMemo, useRef } from "react";
import { setIndividualAssetData } from "@/store/slices/assets";
import { Header } from "../Header";
import Breadcrumb from "../Breadcrumb";
import Link from "next/link";

export default function AssetDetail({ data, id }: IAssetDetailProps) {
  const store = useAppStore();
  const initialized = useRef(false);

  if (!initialized.current) {
    store.dispatch(setIndividualAssetData(data));
    initialized.current = true;
  }

  const { data: assetsData } = useAppSelector(state => state.assets);
  const asset = useMemo(() => assetsData.find(assetItem => assetItem.entity.id === id), [id, assetsData]);

  if (!asset) return <div>Error</div>;

  return (
    <>
      <Header />

      <Breadcrumb
        data={[
          { id: 1, item: <Link href={"/"}>لیست دارایی ها</Link> },
          { id: 2, item: asset?.value.title },
        ]}
      />
    </>
  );
}
