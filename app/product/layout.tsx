import React, { PropsWithChildren } from "react";

type Props = {
  modal: React.ReactNode;
};

const ProductLayout = ({ children, modal }: PropsWithChildren<Props>) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
      {modal}
    </div>
  );
};

export default ProductLayout;
