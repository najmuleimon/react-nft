import { Link } from 'react-router-dom'
import bannerImg from '../../assets/images/banner.png'
import dot from '../../assets/images/dot.png'

const Banner = () => {
  return (
    <section className='banner relative py-8 lg:pt-14 lg:pb-[122px]'>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-1/2">
            <h1 className='font-integral text-2xl lg:text-[40px] lg:leading-[56px] font-medium'>Discover, and collect Digital Art  NFTs </h1>
            <p className='text-base lg:text-xl text-[#565656] max-w-[470px] pt-5 pb-10'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
            <Link to="#" className='text-xl bg-primary rounded-full text-white px-10 py-2 lg:py-4 transition-all duration-300 border-2 border-primary hover:bg-transparent hover:text-primary'>Explore Now</Link>
            <div className="flex items-center gap-6 mt-7">
              <div>
                <h3 className='font-integral text-2xl lg:text-[40px] lg:leading-[56px] font-medium'>98k<span className='font-sans'>+</span></h3>
                <p className='text-base lg:text-xl text-[#565656]'>Artwork</p>
              </div>
              <div>
                <h3 className='font-integral text-2xl lg:text-[40px] lg:leading-[56px] font-medium'>12k<span className='font-sans'>+</span></h3>
                <p className='text-base lg:text-xl text-[#565656]'>Auction</p>
              </div>
              <div>
                <h3 className='font-integral text-2xl lg:text-[40px] lg:leading-[56px] font-medium'>15k<span className='font-sans'>+</span></h3>
                <p className='text-base lg:text-xl text-[#565656]'>Artist</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 md:w-1/2">
            <img src={bannerImg} alt="" className='w-full' />
          </div>
        </div>
      </div>
      <img src={dot} alt="" className='absolute bottom-28 left-[15%] z-[-1]' />
    </section>
  )
}

export default Banner