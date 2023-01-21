import React from "react";

const MoneyData = ({ moneyData }) => {
  return (
    <h1 className="pt-5 font-TSbold text-Orange text-center text-6xl">
      <b className="text-2xl">💲</b>
      {moneyData[2].price}
    </h1>
  );
};

export default MoneyData;

// import React from "react";

// const MoneyData = ({ moneyData }) => {
//   return (
//     <section className="pt-10">
//       <div className="grid grid-cols-3 lg:gap-52 lg:mx-52 lg:text-2xl gap-3 mx-3 text-center font-TSbold text-lg">
//         <div>{moneyData[0].name}</div>
//         <div>{moneyData[2].name}</div>
//         <div>{moneyData[1].name}</div>
//       </div>
//       <div className="grid grid-cols-3 lg:gap-44 lg:mx-44 lg:text-2xl gap-3 mx-3 text-Orange text-lg">
//         <div className="flex bg-purple-500 rounded-xl">
//           <div className="border-gray-700 border-2 bg-purple-300 rounded-full mx-auto text-center lg:px-6 lg:py-4 px-4 py-2 m-5">
//             {moneyData[0].price}
//           </div>
//         </div>
//         <div className="flex bg-purple-500 rounded-xl">
//           <div className="border-gray-700 border-2 bg-purple-300 rounded-full mx-auto text-center px-4 py-2 m-5 lg:px-6 lg:py-4">
//             {moneyData[2].price}
//           </div>
//         </div>
//         <div className="flex bg-purple-500 rounded-xl">
//           <div className="border-gray-700 border-2 bg-purple-300 rounded-full mx-auto text-center px-4 py-2 m-5 lg:px-6 lg:py-4">
//             {moneyData[1].price}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MoneyData;
