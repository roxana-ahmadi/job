"use client";

import { Table, Input } from "antd";
import { ITradesTableProps } from "./types";
import { tableColumns } from "./utils";
import { useAppSelector, useAppStore } from "@/hooks/redux";
import { useRef, useState } from "react";
import { setTradeData } from "@/store/slices/trades";
import { useDebounce } from "@/hooks/useDebounce";

export default function TradesTable({ data }: ITradesTableProps) {
  const [term, setTerm] = useState<string>();
  const debounceTerm = useDebounce(term);
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(setTradeData(data));
    initialized.current = true;
  }
  const tradesState = useAppSelector(state => state.trades);

  if (tradesState.data.length) {
    const x = tradesState.data.filter(t => t.assets.length);

    console.log(x);
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between gap-4">
        <Input
          className="min-w-32 w-auto"
          placeholder="جستجو..."
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
      </div>
      <Table dataSource={tradesState.data} columns={tableColumns} />
    </div>
  );
}
