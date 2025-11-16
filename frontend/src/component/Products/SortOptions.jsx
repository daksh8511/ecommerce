import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortChange = (e) => {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };
  return (
    <div className="mb-4 flex items-center justify-end w-full">
      <select
        id="sort"
        className="border p-2 rounded-md focus:outline-none"
        onChange={handleSortChange}
        value={searchParams.get("sortBy")}
      >
        <option value="">Default</option>
        <option value="priceAsc">Price : Low to High</option>
        <option value="priceDsc">Price : High to Low</option>
        <option value="popular">Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
