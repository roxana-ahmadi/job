export interface IEntity {
  id: number;
  meta: { type: string };
}

export interface IValue {
  title: string;
  english_title: string;
  short_title: string;
  english_short_title: string;
  trade_symbol: string;
  english_trade_symbol: string;
}

export interface IMeta {
  version: number;
  state: string;
  insert_date_time: string;
  update_date_time?: string;
  type: string;
}

export interface IData {
  id: number;
  entity: IEntity;
  type: string;
  value: IValue;
  meta: IMeta;
}

export interface ITrades extends IData {
  assets: IData[];
}

export interface IAssetState {
  data: IData[];
}

export interface ITradeState {
  data: ITrades[];
}
