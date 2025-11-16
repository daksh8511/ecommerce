import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const BestSeller = () => {
  const [quantity, setQuantity] = useState(0);

  const [cartData, setCartData] = useState({
    color: "",
    size: "",
    quantity: quantity,
  });

  const similarProducts = [
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      images: [
        { url: "https://picsum.photos/500/500?random=1", altText: "Image 1" },
      ],
    },
    {
      _id: 2,
      name: "Product 2",
      price: 200,
      images: [
        { url: "https://picsum.photos/500/500?random=2", altText: "Image 2" },
      ],
    },
    {
      _id: 3,
      name: "Product 3",
      price: 300,
      images: [
        { url: "https://picsum.photos/500/500?random=3", altText: "Image 3" },
      ],
    },
    {
      _id: 4,
      name: "Product 4",
      price: 300,
      images: [
        { url: "https://picsum.photos/500/500?random=4", altText: "Image 4" },
      ],
    },
  ];

   const placeholderProducts = [
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      images: [
        { url: "https://picsum.photos/500/500?random=10", altText: "Image 1" },
      ],
    },
    {
      _id: 2,
      name: "Product 2",
      price: 200,
      images: [
        { url: "https://picsum.photos/500/500?random=9", altText: "Image 2" },
      ],
    },
    {
      _id: 3,
      name: "Product 3",
      price: 300,
      images: [
        { url: "https://picsum.photos/500/500?random=8", altText: "Image 3" },
      ],
    },
    {
      _id: 4,
      name: "Product 4",
      price: 300,
      images: [
        { url: "https://picsum.photos/500/500?random=7", altText: "Image 4" },
      ],
    },
    {
      _id: 5,
      name: "Product 5",
      price: 100,
      images: [
        { url: "https://picsum.photos/500/500?random=6", altText: "Image 5" },
      ],
    },
    {
      _id: 6,
      name: "Product 6",
      price: 200,
      images: [
        { url: "https://picsum.photos/500/500?random=5", altText: "Image 6" },
      ],
    },
    {
      _id: 7,
      name: "Product 7",
      price: 300,
      images: [
        { url: "https://picsum.photos/500/500?random=4", altText: "Image 7" },
      ],
    },
    {
      _id: 8,
      name: "Product 8",
      price: 300,
      images: [
        { url: "https://picsum.photos/500/500?random=3", altText: "Image 8" },
      ],
    },
  ];

  useEffect(() => {
    setCartData((prev) => ({
      ...prev,
      quantity: quantity,
    }));
  }, [quantity]);

  const selectedProducts = {
    name: "Stylish jacket",
    price: 120,
    originalPrice: 150,
    description: "This is stylish jacket perfect for occasion",
    brand: "FashionBrand",
    material: "Leather",
    size: ["M", "L", "S"],
    color: ["Red", "Green"],
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Image 1",
      },
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Image 2",
      },
    ],
  };
  const [selectedImageUrl, setSelectedImageUrl] = useState(
    "https://picsum.photos/500/500?random=1"
  );

  const handleAddToCart = () => {
    if (!cartData.color || !cartData.quantity || !cartData.size) {
      toast.error("Select size and details!");
    } else {
      toast("Product are add in the cart");
    }
  };
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 flex justify-center">
        Best seller
      </h2>
      <div className="p-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="hidden md:flex flex-col space-y-4 mr-6">
              {selectedProducts.images.map((myimage, index) => (
                <img
                  src={myimage.url}
                  alt={myimage.altText}
                  className={`h-20 w-20 rounded-xl object-cover cursor-pointer border`}
                  key={index}
                  onClick={() => setSelectedImageUrl(myimage.url)}
                />
              ))}
            </div>
            {/* main iamge */}
            <div className="md:w-1/2">
              <div className="mb-4 ">
                <img
                  src={selectedImageUrl}
                  alt="main image"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* mobile thumbnail */}
            <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
              {selectedProducts.images.map((myimage, index) => (
                <img
                  src={myimage.url}
                  alt={myimage.altText}
                  className="h-20 w-20 rounded-xl object-cover cursor-pointer border"
                  key={index}
                  onClick={() => setSelectedImageUrl(myimage.url)}
                />
              ))}
            </div>

            {/* right section */}
            <div className="md:w-1/2 md:ml-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                {selectedProducts.name}
              </h2>
              <p className="text-lg text-gray-600 mb-1 line-through">
                {selectedProducts.originalPrice}
              </p>
              <p className="text-xl text-gray-500 mb-2">
                ${selectedProducts?.price}
              </p>
              <p className="text-gray-600 mb-4">
                {selectedProducts?.description}
              </p>

              <div className="mb-4">
                <p className="text-gray-700">Color : </p>
                <div className="flex gap-2 mr-2">
                  {selectedProducts.color.map((col) => (
                    <button
                      className={`h-8 w-8 rounded-full border ${
                        cartData.color === col ? "border-red-600 w-10 h-10" : ""
                      }`}
                      onClick={() =>
                        setCartData((prev) => ({
                          ...prev,
                          color: col,
                        }))
                      }
                      style={{
                        background: col.toLocaleLowerCase(),
                        filter: "brightness(0.5)",
                      }}
                    ></button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700">Size : </p>
                <div className="flex gap-2 mt-2">
                  {selectedProducts?.size.map((sizes) => (
                    <button
                      onClick={() =>
                        setCartData((prev) => ({
                          ...prev,
                          size: sizes,
                        }))
                      }
                      className={`px-4 py-2 rounded border ${
                        cartData.size === sizes ? "bg-black text-white" : ""
                      }`}
                    >
                      {sizes}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6 ">
                <p className="text-gray-700">
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      onClick={() => {
                        if (quantity === 0) {
                          setQuantity(0);
                        } else {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className="px-2 bg-gray-200 rounded text-lg"
                    >
                      -
                    </button>
                    <span className="text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2 bg-gray-200 rounded text-lg"
                    >
                      +
                    </button>
                  </div>
                </p>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-black text-white py-2 px-6 rounded w-full mb-4"
              >
                Add to cart
              </button>
              <div className="mt-10 text-gray-700">
                <h3 className="text-xl font-bold mb-4">Characteristics : </h3>
                <table className="w-full text-left text-sm text-gray-700">
                  <tbody>
                    <tr>
                      <td className="py-1">Brand</td>
                      <td className="py-1">{selectedProducts?.brand}</td>
                    </tr>
                    <tr>
                      <td className="py-1">Material</td>
                      <td className="py-1">{selectedProducts?.material}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="text-2xl text-center font-medium mb-4">
              You may also like
            </h2>
            <ProductGrid products={similarProducts} />
          </div>
           <div className="mt-20">
            <h2 className="text-2xl text-center font-medium mb-4">
              Top wears for women
            </h2>
            <ProductGrid products={placeholderProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
