import About from '../components/home/About'
import Banner from '../components/home/Banner'
import DiscoverNft from '../components/home/DiscoverNft'
import FeaturedNft from '../components/home/FeaturedNft'
import Nft from '../components/home/Nft'
import SellNft from '../components/home/SellNft'

const Home = () => {
  return (
    <>
      <Banner/>
      <About/>
      <Nft/>
      <FeaturedNft/>
      <SellNft/>
      <DiscoverNft/>
    </>
  )
}

export default Home