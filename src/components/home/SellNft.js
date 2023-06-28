import { Link } from 'react-router-dom'
import image from '../../assets/images/sell.png'

const SellNft = () => {
  return (
    <section className='py-8 lg:pt-[102px] lg:pb-20'>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className='md:w-1/2'>
            <img src={image} alt="" />
          </div>

          <div className='md:w-1/2'>
            <h2 className='font-integral text-xl lg:text-[32px] lg:leading-[44px] font-bold max-w-[320px]'>Create and sell your NFTs</h2>
            <p className='text-base lg:text-lg text-[#636363] py-6 lg:pt-10 lg:pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
            <Link to="#" className='py-2 lg:py-4 px-10 border-2 border-primary transition-all duration-300 hover:bg-transparent hover:text-primary rounded-full text-white bg-primary text-xl'>Sign Up Now</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SellNft