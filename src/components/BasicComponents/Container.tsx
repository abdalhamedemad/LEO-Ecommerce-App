import React from "react";
type Props = {
  children: React.ReactNode;
};
const Container = ({ children }: Props) => {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">{children}</div>
  );
};

export default Container;
