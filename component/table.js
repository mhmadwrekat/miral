import React from "react";
import Data from "./data.json";
const table = () => {
  let counter = 1;

  return (
    <div>
      <table class="min-w-full text-center">
        <thead class="border-b bg-pink-700">
          <tr>
            <th
              scope="col"
              class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
            >
              #
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
              الاسم
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
              السعر
            </th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item, idx) => {
            return (
              idx < 10 && (
                <tr class="border-b bg-white">
                  <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {counter++}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {item.date}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {item.hour}
                  </td>

                  <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {item.details}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {item.price}
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
