import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((pr, prIndex) => (
        <Link key={prIndex} to={`/product/${pr._id}`} className="block">
          <div className="bg-white p-4 rounded-lg ">
            <div className="w-full h-96 mb-4">
                <img src={pr.images[0].url} alt={pr.images[0].altText} className="w-full h-[40vh] object-cover rounded-lg" />
                <h3 className="text-xl mb-2">{pr.name}</h3>
                <p className="text-gray-500 font-medium text-xl tracking-tight">$ {pr.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
