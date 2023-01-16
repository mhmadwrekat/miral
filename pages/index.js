import React from "react";
import HeadComp from "../component/page/HeadComp";
import Table from "../component/table";
import MoneyData from "../component/MoneyData";
import fetch from "isomorphic-unfetch";
const MONEY_API_URL = process.env.NEXT_PUBLIC_MONEY_API;

const index = ({ moneyData }) => {
  console.log(moneyData);
  return (
    <div>
      <HeadComp />
      <MoneyData moneyData={moneyData} />
      <div className="lg:w-10/12 mx-auto pt-10">
        <Table />
      </div>
    </div>
  );
};
index.getInitialProps = async () => {
  // Get Money API
  const resp = await fetch(`${MONEY_API_URL}`);
  const { data } = await resp.json();

  return {
    moneyData: data,
  };
};
export default index;
