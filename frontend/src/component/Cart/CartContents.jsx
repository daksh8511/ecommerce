import { RiDeleteBin3Fill } from "react-icons/ri";

const CartContents = () => {
    const cartContent = [
        {
            productId : 1,
            name : 'Jeans',
            size : 'L',
            color : 'Blue',
            quantity : 1,
            price : 25,
            image : 'https://picsum.photos/200?random=1'
        },
        {
            productId : 2,
            name : 'T-Shirt',
            size : 'XXL',
            color : 'Yellow',
            quantity : 4,
            price : 50,
            image : 'https://picsum.photos/200?random=2'
        },
    ]
  return (
    <div>
        {
            cartContent?.map((item) => (
                <div className='flex items-start justify-between py-4 border-b border-gray-300'>
                    <div className='flex items-center'>
                        <img src={item.image} alt="image" className='w-20 h-24 object-cover mr-4 rounded' />
                        <div>
                            <h3>{item.name}</h3>
                            <p className='text-sm text-gray-500'>Size : {item.size} | Color : {item.color}</p>
                            <div className='flex items-center mt-2 gap-2'>
                                <button className='border rounded px-2  py-1 text-xl font-medium cursor-pointer'>-</button>
                                <span className='mx-4'>{item.quantity}</span>
                                <button className='border rounded px-2  py-1 text-xl font-medium cursor-pointer'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>$ {item?.price.toLocaleString()}</p>
                        <button>
                            <RiDeleteBin3Fill className="h-6 w-6 text-red-500 mt-2" />
                        </button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CartContents