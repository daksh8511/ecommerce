import { HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi";
import featured from "../../assets/featured.webp";
import { Link } from "react-router-dom";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

const FeatuerdCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* left content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort and style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apperel made for your everyday life
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover high-quality, comfortable clothing that effortless blends
            fashion and function. Designed to make you look and feel great every
            day.
          </p>
          <Link
            to={`/collection/all`}
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            Shop now
          </Link>
        </div>
        {/* right content */}
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="featured collection"
            className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl"
          />
        </div>
      </div>
      <section className="mt-15">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* feature 1 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <HiShoppingBag className="w-10 h-10" />
                </div>
                <h4 className="tracking-tighter mb-2 uppercase">Free internation shipping</h4>
                <p className="text-gray-600 text-sm tracking-tighter">On all orders over $100</p>
            </div>
             {/* feature 2 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <HiArrowPathRoundedSquare className="w-10 h-10" />
                </div>
                <h4 className="tracking-tighter mb-2 uppercase">45 days return</h4>
                <p className="text-gray-600 text-sm tracking-tighter">Moneyback gurantee</p>
            </div>
             {/* feature 3 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <HiOutlineCreditCard className="w-10 h-10" />
                </div>
                <h4 className="tracking-tighter mb-2 uppercase">Secure checkout</h4>
                <p className="text-gray-600 text-sm tracking-tighter">100% secure payment</p>
            </div>
            
        </div>
      </section>
    </section>
  );
};

export default FeatuerdCollection;
