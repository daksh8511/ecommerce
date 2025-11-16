import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault()
    setOpen(false)
  }

  return (
    <div
      className={`${
        isOpen
          ? "absolute flex top-0 left-0 w-full items-center justify-center transition-all duration-300 bg-white h-24 z-50"
          : "w-auto"
      }`}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
          <div className="relative w-2/3">
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              value={searchTerm}
              className="bg-gray-100 px-4 py-2 pr-12 outline-0 rounded-full w-full"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hove:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>
          <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:text-gray-800 text-gray-600 cursor-pointer" onClick={() => setOpen(false)}>
            <HiMiniXMark className="w-6 h-6" />
          </button>
        </form>
      ) : (
        <button onClick={() => setOpen(true)} className="cursor-pointer">
          <HiMagnifyingGlass className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
