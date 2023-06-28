import { FaEthereum } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NftSmallCard = ({data}) => {
  const {image, authorImg, price, stock, placedBid} = data || {};

  return (
    <div className="flex items-center gap-5">
      <div className="flex-shrink-0 w-20 lg:w-36 h-20 lg:h-36 rounded-xl overflow-hidden">
        <img src={require(`../../assets/images/${image}`)} alt="" className='w-full' />
      </div>

      <div>
        <h4 className='font-bold text-lg sm:text-xl'>The Futr Abstr</h4>
        <div className="flex items-center gap-2 mt-2 mb-4">
          <div className="h-[34px] w-[34px] rounded-full overflow-hidden">
            <img src={require(`../../assets/images/${authorImg}`)} alt="" className='w-full' />
          </div>
          <h6 className='text-xs text-green font-bold flex items-center gap-1 p-1 sm:p-2 border border-green rounded-md'>
            <FaEthereum className='text-xl'/>
            {price} ETH
          </h6>
          <p className='text-[#757575] text-sm'>{placedBid} of {stock}</p>
        </div>
        <Link to="#" className='py-1 lg:py-[10px] px-5 rounded-full text-sm font-medium text-primary border-2 border-primary transition-all duration-300 hover:bg-primary hover:text-white'>Place a bid</Link>
      </div>
    </div>
  )
}

export default NftSmallCard