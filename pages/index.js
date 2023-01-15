import React from "react";
import HeadComp from "../component/page/HeadComp";
import Table from "../component/table";
import MoneyData from "../component/MoneyData";
const index = () => {
  return (
    <div>
      <HeadComp />
      <MoneyData />
      <div className="lg:w-10/12 mx-auto pt-10">
        <Table />
      </div>
    </div>
  );
};

export default index;
