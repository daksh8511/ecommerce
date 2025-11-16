import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white">
      <div className="container mx-auto flex justify-between py-3">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXFill className="h-5 w-5" />
          </a>
        </div>
        <div className="m-auto">We ship worldwide  - Fast and reliable shipping!</div>
        <div className="text-end hidden md:flex">+45 12 12 12 12</div>
      </div>
    </div>
  );
};

export default Topbar;
