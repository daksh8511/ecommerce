import { Link } from "react-router-dom";
const NewArrivales = () => {
  const products = [
    {
      _id: 1,
      name: "Stylish jacket",
      price: 230,
      images: {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Jacket photo",
      },
    },
    {
      _id: 2,
      name: "Stylish jacket",
      price: 230,
      images: {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Jacket photo",
      },
    },
    {
      _id: 3,
      name: "Stylish jacket",
      price: 230,
      images: {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Jacket photo",
      },
    },
    {
      _id: 4,
      name: "Stylish jacket",
      price: 230,
      images: {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Jacket photo",
      },
    },
    {
      _id: 5,
      name: "Stylish jacket",
      price: 230,
      images: {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Jacket photo",
      },
    },
    {
      _id: 6,
      name: "Stylish jacket",
      price: 230,
      images: {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Jacket photo",
      },
    },
    {
      _id: 7,
      name: "Stylish jacket",
      price: 230,
      images: {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Jacket photo",
      },
    },
    {
      _id: 8,
      name: "Stylish jacket",
      price: 230,
      images: {
        url: "https://picsum.photos/500/500?random=8",
        altText: "Jacket photo",
      },
    },
  ];
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore new arrivales</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* scrollable content */}
        <div className="container mx-auto overflow-x-scroll flex space-x-6 relative">
          {products.map((items) => (
            <div
              key={items._id}
              className="min-w-full sm:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img src={items.images.url} alt={items.images.altText} />
              <div className="absolute right-0 bottom-0 left-0 opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`/product/${items?._id}`} className="block ">
                  <h4 className="font-medium">{items?.name}</h4>
                  <p className="mt-1">${items?.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivales;
