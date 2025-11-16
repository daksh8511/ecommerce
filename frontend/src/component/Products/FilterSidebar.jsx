import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 100]);
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

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = {...filters};
    if(type === 'checkbox'){
      if(checked){
        newFilters[name] = [...(newFilters[name] || []), value];
      }else{
        newFilters[name] = newFilters[name].filter((item) => item !== value)
      }
    }else{
      newFilters[name] = value
    }
    setFilters(newFilters)
    updateUrlParams(newFilters)
  };

  const updateUrlParams = (newFilters) => {
    const params = new URLSearchParams()
    Object.keys(newFilters).map((key) => {
      if(Array.isArray(newFilters[key]) && newFilters[key].length > 0){
        params.append(key, newFilters[key].join(','))
      }else if(newFilters[key]){
        params.append(key, newFilters[key])
      }
    })
    setSearchParams(params)
    navigate(`?${params.toString()}`)
  }

  const handlePriceRang = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice])
    const newFilter = {...filters, minPrice : 0, maxPrice : newPrice}
    setFilters(newFilter)
    updateUrlParams(newFilter)
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category */}
      <div className="mb-6">
        <label className="font-medium mb-2 block text-gray-600">Category</label>
        {categories?.map((cate, i) => (
          <div key={i} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={cate}
              onChange={handleFilterChange}
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
          <div key={i} className="flex items-center mb-1">
            <input
              type="radio"
              value={gen}
              name="gender"
              onClick={handleFilterChange}
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
          {colors?.map((color) => (
            <button
              name="color"
              value={color}
              className={`w-8 h-8 rounded-full border ${
                filters.color === color ? "ring-2 ring-black" : ""
              }`}
              type="button"
              onClick={handleFilterChange}
              style={{ backgroundColor: color.toLowerCase() }}
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
                value={size}
                checked={filters.size.includes(size)}
                onClick={handleFilterChange}
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
                value={mate}
                checked={filters.material.includes(mate)}
                onClick={handleFilterChange}
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
                name="brand"
                value={brand}
                checked={filters.brand.includes(brand)}
                onClick={handleFilterChange}
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
            type="range"
            name="maxPrice"
            min={0}
            max={100}
            value={priceRange[1]}
            onChange={handlePriceRang}
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
