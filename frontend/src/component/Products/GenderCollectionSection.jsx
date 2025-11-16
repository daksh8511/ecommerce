import { Link } from 'react-router-dom'
import mensCollection from '../../assets/mens-collection.webp'
import weomenCollection from '../../assets/womens-collection.webp'

const GenderCollectionSection = () => {
  return (
   <section className='py-16 px-4 lg:px-0'>
    <div className='container mx-auto flex flex-col md:flex-row gap-8'>
        {/* wemens collection */}
        <div className='relative flex-1'>
            <img src={weomenCollection} alt="Womens collection image" className='w-full h-[700px] object-cover' />
            <div className='absolute bottom-8 left-8 bg-white opacity-90 p-4'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Women's collection</h2>
                <Link to={'/collections/all?gender=women'} className='text-gray-900 underline'>Shop now</Link>
            </div>
        </div>
        {/* mens collection */}
        <div className='relative flex-1'>
            <img src={mensCollection} alt="mens collection image" className='w-full h-[700px] object-cover' />
            <div className='absolute bottom-8 left-8 bg-white opacity-90 p-4'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Mens's collection</h2>
                <Link to={'/collections/all?gender=men'} className='text-gray-900 underline'>Shop now</Link>
            </div>
        </div>
    </div>
   </section>
  )
}

export default GenderCollectionSection