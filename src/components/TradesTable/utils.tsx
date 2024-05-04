import { IData } from "@/store/slices/types";
import { ColumnsType } from "antd/es/table";

export const tableColumns: ColumnsType<IData> = [
  {
    title: "شناسه",
    dataIndex: "entity",
    key: "entity",
    render: (v, r) => {
      // console.log(v, r);
      return "salam";
    },
  },
];
