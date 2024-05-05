import React, { Fragment, FunctionComponent } from "react";
import { IBreadcrumbProps } from "./types";

const Breadcrumb: FunctionComponent<IBreadcrumbProps> = ({ data }) => {
  const renderPath = () =>
    data.map((path, pathIndex) => {
      if (pathIndex + 1 === data.length) return <li key={path.id}>{path.item}</li>;

      return (
        <Fragment key={path.id}>
          <li>{path.item}</li>
          <li aria-hidden="true">/</li>
        </Fragment>
      );
    });

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-2 text-sm">{renderPath()}</ol>
    </nav>
  );
};

export default Breadcrumb;
