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
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center">
              <thead class="border-b bg-pink-700">
                <tr>
                  <th
                    scope="col"
                    class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
                  >
                    الإسم
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
                    الساعة
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
                    الحساب
                  </th>
                  <th
                    scope="col"
                    class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
                  >
                    ملاحظات
                  </th>
                  <th
                    scope="col"
                    class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
                  >
                    حذف
                  </th>
                </tr>
              </thead>
              <tbody>
                {customersData.map((item) => {
                  return (
                    <>
                      <tr class="border-b bg-white">
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {item.name}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {item.appointment.split("T", 1)}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {item.clock}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {item.types}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {item.price}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {item.note}
                        </td>
                        <td class="whitespace-nowrap px-1 py-4 text-sm font-medium text-gray-900">
                          <img
                            src="./assest/images/delete.webp"
                            className="w-6 h-6 lg:h-8 lg:w-8 mx-auto"
                            alt="delete icon"
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default table;
/*
 <div className="">
      <div className="overflow-hidden">
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
                الاسم
              </th>
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
                    <td class="whitespace-nowrap px-1.5 py-4 text-sm font-medium text-gray-900">
                      {item.name}
                    </td>
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
    </div>
*/
