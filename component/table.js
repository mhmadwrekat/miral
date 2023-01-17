import React, { useState, useEffect } from "react";
import fakeData from "./data.json";
const CUSTOMERS_API_URL = process.env.NEXT_PUBLIC_CUSTOMER_API;
import axios from "axios";

const table = () => {
  const [customersData, setCustomersData] = useState([]);
  useEffect(() => {
    axios.get(CUSTOMERS_API_URL).then((res) => {
      setCustomersData(res.data.data);
    });
    // setCustomersData(customersData.reverse());
  }, []);
  let counter = 1;
  return (
    <div className="w-full mx-auto">
      <table class="min-w-full text-center">
        <thead class="border-b bg-pink-700">
          <tr>
            <th
              scope="col"
              class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
            >
              الاسم
            </th>
            <th
              scope="col"
              class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
            >
              التاريخ
            </th>

            <th
              scope="col"
              class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
            >
              الحجز
            </th>
            <th
              scope="col"
              class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
            >
              السعر
            </th>
            <th
              scope="col"
              class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
            ></th>
          </tr>
        </thead>
        <tbody>
          {customersData.map((item, idx) => {
            return (
              idx < 10 && (
                <tr class="border-b bg-white">
                  <td class="whitespace-nowrap px-1.5 py-4 text-sm font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td class="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-900">
                    {item.appointment.split("T", 1)}
                  </td>

                  <td class="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-900">
                    {item.types}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                    {item.price}
                  </td>
                  <td class="whitespace-nowrap px-1 py-4 text-sm font-medium text-gray-900">
                    <img
                      src="./assest/images/delete.webp"
                      className="w-6 h-6 lg:h-8 lg:w-8"
                      alt="delete icon"
                    />
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default table;
