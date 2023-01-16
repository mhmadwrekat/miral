import React from "react";

const MoneyData = ({ moneyData }) => {
  console.log(moneyData[0].price);
  return (
    <section className="pt-10">
      <div className="grid grid-cols-3 lg:gap-52 lg:mx-52 lg:text-2xl gap-3 mx-3 text-center font-extrabold text-lg">
        <div>محمد</div>
        <div>شذى</div>
        <div>التكلفة</div>
      </div>
      <div className="grid grid-cols-3 lg:gap-44 lg:mx-44 lg:text-2xl gap-3 mx-3 text-white font-extrabold text-lg">
        <div className="flex bg-purple-600 rounded-xl">
          <div className="border-white border-2 bg-purple-400 rounded-full mx-auto text-center lg:px-5 lg:py-4 px-3.5 py-2 m-5">
            {moneyData[0].price}
          </div>
        </div>
        <div className="flex bg-purple-600 rounded-xl">
          <div className="border-white border-2 bg-purple-400 rounded-full mx-auto text-center px-3.5 py-2 m-5 lg:px-5 lg:py-4">
            {moneyData[1].price}
          </div>
        </div>
        <div className="flex bg-purple-600 rounded-xl">
          <div className="border-white border-2 bg-purple-400 rounded-full mx-auto text-center px-3.5 py-2 m-5 lg:px-5 lg:py-4">
            {moneyData[2].price}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyData;
