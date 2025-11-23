import { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countingStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    color: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
  });

  const handleChange = (e) => {
    setProductData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit product</h2>

      <form onSubmit={handleSubmit}>
        {/* product name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product name</label>
          <input
            type="text"
            value={productData?.name}
            name="name"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            type="text"
            value={productData?.description}
            name="description"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            rows={4}
            required
          />
        </div>

        {/* price */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            value={productData?.price}
            name="price"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* count in stock */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Count in stock</label>
          <input
            type="number"
            value={productData?.countingStock}
            name="countingStock"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* SKU */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            value={productData?.sku}
            name="sku"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Sizes</label>
          <input
            type="text"
            value={productData?.sizes.join(", ")}
            name="sizes"
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((sizes) => sizes.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Color */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Color</label>
          <input
            type="text"
            value={productData?.color.join(", ")}
            name="color"
            onChange={(e) =>
              setProductData({
                ...productData,
                color: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Image upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload image</label>
          <input type="file" onChange={handleImageUpload} />

          <div className="mt-4 flex gap-4">
            {productData?.images?.map((img, index) => (
              <div key={index}>
                <img
                  src={img?.url}
                  alt="Product image"
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Update product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
