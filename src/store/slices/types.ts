export interface IEntity {
  id: string;
  meta: { type: string };
}

export interface IMeta {
  version: number;
  state: string;
  insert_date_time: string;
  update_date_time?: string;
  type: string;
}

// Asset

export interface IAsset {
  id: number;
  value: IAssetValue;
  type: string;
  entity: IEntity;
  meta: IMeta;

  trades: ITrade[];
}

export interface IAssetValue {
  title: string;
  english_title: string;
  short_title: string;
  english_short_title: string;
  trade_symbol?: string;
  english_trade_symbol: string;
}

export interface IAssetState {
  data: IAsset[];
}

// Trade

export interface ITrade {
  id: number;
  value: ITradeValue;
  type: string;
  entity: IEntity;
  meta: IMeta;
}

export interface ITradeValue {
  start_date_time: string;
  end_date_time: string;
  instrument: {
    id: number;
    meta: {
      type: string;
    };
  };
  close_price: number;
  close_price_change: number;
  close_price_change_percent: number;
  open_price: number;
  low_price: number;
  high_price: number;
  trade_count: number;
  buyer_count: number;
  volume: number;
  value: number;
}
