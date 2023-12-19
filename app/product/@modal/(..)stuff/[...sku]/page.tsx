import React from "react";

type Props = {
  params: {
    sku: any;
  };
};

const StuffPage = (params: Props) => {
  return <div>StuffPage: {JSON.stringify(params)}</div>;
};

export default StuffPage;
