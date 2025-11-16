import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top wear", "Bottom wear"];
  const colors = ["Red", "Green", "Blue", "Yellow", "Black", "Grey"];
  const size = ["S", "M", "L", "XL", "XXL"];
  const material = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyster",
    "Silk",
    "Linen",
    "Visose",
    "Fleece",
  ];
  const brands = ["Nike", "Adidas", "Reebok"];
  const gender = ["Men", "Women"];

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params?.category || "",
      gender: params?.gender || "",
      color: params?.color || "",
      size: params?.size ? params?.size.split(",") : [],
      material: params?.material ? params?.material.split(",") : [],
      brand: params?.brand ? params?.brand.split(",") : [],
      minPrice: params?.minPrice || 0,
      maxPrice: params?.maxPrice || 100,
    });
    setPriceRange([0, params?.maxPrice || 100]);
  }, [searchParams]);

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category */}
      <div className="mb-6">
        <label className="font-medium mb-2 block text-gray-600">Category</label>
        {categories?.map((cate, i) => (
          <div
            key={i}
            className="flex items-center mb-1"
            onClick={() => {
              const updated = {...filters, category : cate}
              setFilters(updated)
              updateURLParams(updated)
            }}
          >
            <input
              type="radio"
              name="category"
              value={filters?.category}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <h4>{cate}</h4>
          </div>
        ))}
      </div>

      {/* Gender */}
      <div className="mb-6">
        <label className="font-medium mb-2 block text-gray-600">Gender</label>
        {gender?.map((gen, i) => (
          <div
            key={i}
            className="flex items-center mb-1"
            onClick={() => {
              const updated = {...filters, gender : gen}
              setFilters(updated)
              updateURLParams(updated)
            }}
          >
            <input
              type="radio"
              value={filters?.gender}
              name="category"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <h4>{gen}</h4>
          </div>
        ))}
      </div>

      {/* color selection */}
      <div className="mb-6">
        <label className="font-medium mb-2 block text-gray-600">Colors</label>
        <div className="flex flex-wrap gap-2">
          {colors?.map((color, i) => (
            <button
              key={i}
              onClick={() => {
                const updated = {...filters, color : color}
                setFilters(updated)
                updateURLParams(updated)
              }}
              value={filters?.color}
              name="color"
              className={`w-8 h-8 rounded-full border border-gray-800 cursor-pointer transition hover:scale-105`}
              style={{ background: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* size selection */}
      <div className="mb-6">
        <label className="font-medium mb-2 block text-gray-600">Size</label>
        <div>
          {size?.map((size, i) => (
            <div key={i} className="mb-1 flex items-center">
              <input
                type="checkbox"
                name="size"
                value={filters?.size}
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    size: [...prev.size, size],
                  }))
                }
                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <h4>{size}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* material selection */}
      <div className="mb-6">
        <label className="font-medium mb-2 block text-gray-600">Material</label>
        <div>
          {material?.map((mate, i) => (
            <div key={i} className="mb-1 flex items-center">
              <input
                type="checkbox"
                name="material"
                value={filters?.material}
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    material: [...prev.material, mate],
                  }))
                }
                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <h4>{mate}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* brand selection */}
      <div className="mb-6">
        <label className="font-medium mb-2 block text-gray-600">Brand</label>
        <div>
          {brands?.map((brand, i) => (
            <div key={i} className="mb-1 flex items-center">
              <input
                type="checkbox"
                name="category"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    brand: [...prev.brand, brand],
                  }))
                }
                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <h4>{brand}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* price range */}
      <div className="mb-6">
        <label className="font-medium mb-2 block text-gray-600">Price</label>
        <div>
          <input
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                maxPrice: Number(e.target.value),
              }))
            }
            type="range"
            min={0}
            max={100}
            className="w-full h-2 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-gray-600">
            <span>$0</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
