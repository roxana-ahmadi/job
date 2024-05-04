import { IData } from "@/store/slices/types";
import { GetProp, TablePaginationConfig, TableProps } from "antd";

export interface ITradesTableProps {
  data: IData[];
}

export interface ITableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Parameters<GetProp<TableProps, "onChange">>[1];
}
