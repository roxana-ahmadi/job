import TradesTable from "../TradesTable";
import { IHomePageTableProps } from "./types";

export default async function HomePageTable({ data }: IHomePageTableProps) {
  return <TradesTable data={data} />;
}
