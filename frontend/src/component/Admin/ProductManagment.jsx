import React from "react";
import { Link } from "react-router-dom";

const ProductManagment = () => {
  const products = [
    {
      _id: 123,
      name: "Shirt",
      price: 110,
      sku: "123123123",
    },
  ];

  const handleDeleteProduct = (prdtId) => {
    if(window.confirm('Are you sure want to delete the product?')){
        console.log(prdtId)
    }
  }
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl mb-6 font-bold">Product managment</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0
              ? products?.map((prdt) => (
                  <tr
                    key={prdt?._id}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                      {prdt.name}
                    </td>
                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                      ${prdt.price}
                    </td>
                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                      {prdt.sku}
                    </td>
                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                      <Link
                        to={`/admin/products/${prdt._id}/edit`}
                        className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                      >Edit</Link>
                      <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded" onClick={() => handleDeleteProduct(prdt?._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              : (
                <tr>
                    <td colSpan={4} className="p-4 text-center">No product found.</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagment;
