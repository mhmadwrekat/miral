import React from "react";
import HeadComp from "../component/page/HeadComp";
import Table from "../component/table";
import Money from "../component/money";
const index = () => {
  return (
    <div className="lg:w-10/12 mx-auto">
      <HeadComp />
      <Money />
      <Table />
    </div>
  );
};

export default index;
