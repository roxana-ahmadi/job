import { ReactNode } from "react";

export interface IBreadcrumbData {
  id: string | number;
  item: ReactNode;
}

export interface IBreadcrumbProps {
  data: IBreadcrumbData[];
}
