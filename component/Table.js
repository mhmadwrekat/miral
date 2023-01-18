import React, { useState, useEffect } from "react";
const CUSTOMERS_API_URL = process.env.NEXT_PUBLIC_CUSTOMER_API;
const PASSWOED = process.env.NEXT_PUBLIC_PERSONAL_PASSWORD;
import axios from "axios";
import Swal from "sweetalert2";

const Table = () => {
  const [customersData, setCustomersData] = useState([]);
  useEffect(() => {
    axios.get(CUSTOMERS_API_URL).then((res) => {
      setCustomersData(res.data.data);
    });
  }, []);

  const handle_delete = (id) => {
    let config = {
      method: "DELETE",
      baseURL: CUSTOMERS_API_URL,
      url: `/${id}`,
    };
    axios(config)
      .then((res) => {
        console.log(res);
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delete_click = (id) => {
    Swal.fire({
      title: "Enter The Password",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Delete",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        if (login === PASSWOED) {
          handle_delete(id);
          Swal.fire({
            title: `Deleted Successful`,
            icon: "success",
          });
        } else {
          Swal.showValidationMessage(`Password Incorrect`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  return (
    <div className="flex flex-col font-semibold">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <thead className="border-b bg-pink-700">
                <tr>
                  <th
                    scope="col"
                    className="px-1 py-4 text-xs text-white lg:text-sm"
                  >
                    الإسم
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-4 text-xs text-white lg:text-sm"
                  >
                    التاريخ
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-4 text-xs text-white lg:text-sm"
                  >
                    الساعة
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-4 text-xs text-white lg:text-sm"
                  >
                    الحجز
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-4 text-xs text-white lg:text-sm"
                  >
                    الحساب
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-4 text-xs text-white lg:text-sm"
                  >
                    ملاحظات
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-4 text-xs text-white lg:text-sm"
                  >
                    حذف
                  </th>
                </tr>
              </thead>
              <tbody>
                {customersData.map((item, idx) => {
                  return (
                    <>
                      <tr key={idx} className="border-b bg-white">
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          {item.appointment.split("T", 1)}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          {item.clock}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          {item.types}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          {item.price}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          {item.note}
                        </td>
                        <td className="whitespace-nowrap px-1 py-4 text-sm text-gray-900">
                          <img
                            src="./assest/images/delete.webp"
                            className="w-6 h-6 lg:h-8 lg:w-8 mx-auto cursor-pointer"
                            alt="delete icon"
                            onClick={() => {
                              delete_click(item._id);
                            }}
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

export default Table;
