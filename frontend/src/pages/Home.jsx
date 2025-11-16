import Hero from '../component/Layout/Hero'
import BestSeller from '../component/Products/BestSeller'
import FeatuerdCollection from '../component/Products/FeatuerdCollection'
import GenderCollectionSection from '../component/Products/GenderCollectionSection'
import NewArrivales from '../component/Products/NewArrivales'

const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollectionSection />
        <NewArrivales />
        
        {/* Best seller */}
        <BestSeller />
        <FeatuerdCollection />
        
    </div>
  )
}

export default Home