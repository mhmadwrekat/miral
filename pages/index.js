import React from "react";
import HeadComp from "../component/page/HeadComp";
import Table from "../component/table";
import MoneyData from "../component/MoneyData";
import fetch from "isomorphic-unfetch";
const API_URL = "https://miral.vercel.app/api/customers";

const index = ({ notes }) => {
  console.log(notes);
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
index.getInitialProps = async () => {
  const resp = await fetch(`${API_URL}`);
  const { data } = await resp.json();
  return {
    notes: data,
  };
};
export default index;
