import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../component/Products/FilterSidebar";
import SortOptions from "../component/Products/SortOptions";
import ProductGrid from "../component/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef();
  const [isSideharOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSideharOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const placeholderProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=10",
              altText: "Image 1",
            },
          ],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 200,
          images: [
            {
              url: "https://picsum.photos/500/500?random=9",
              altText: "Image 2",
            },
          ],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 300,
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
              altText: "Image 3",
            },
          ],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 300,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
              altText: "Image 4",
            },
          ],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
              altText: "Image 5",
            },
          ],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 200,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
              altText: "Image 6",
            },
          ],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 300,
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
              altText: "Image 7",
            },
          ],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 300,
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
              altText: "Image 8",
            },
          ],
        },
      ];
      setProducts(placeholderProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* mobile filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2 " />
      </button>

      {/* filter sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSideharOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 h-full z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="grow p-4 mb-8">
        <h2 className="text-2xl uppercase mb-4">All collections</h2>
        <SortOptions />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
