import { FaEthereum } from 'react-icons/fa';

const NftBigCard = ({data}) => {
  const {image, authorImg, author, stock, price} = data || {};

  return (
    <div className='nft-big-card'>
      <div className="rounded-3xl overflow-hidden mb-4 md:mb-8 w-full h-[200px] md:h-auto">
        <img src={require(`../../assets/images/${image}`)} alt="" className='w-full h-full object-cover' />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 gap-1 sm:gap-[10px]">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img src={require(`../../assets/images/${authorImg}`)} alt="" className='w-full' />
          </div>
          <div>
            <h4 className='font-bold text-lg sm:text-xl pb-1'>{author}</h4>
            <p className='text-sm text-[#363639]'>{stock} in the stock</p>
          </div>
        </div>
        <div>
          <small className='block font-medium text-xs text-[#3A3A3A] mb-2'>Highest Bid</small>
          <h5 className='flex items-center gap-[10px] text-base font-bold text-[#3A3A3A]'>
            <FaEthereum className='text-xl'/>
            {price} ETH
          </h5>
        </div>
      </div>
    </div>
  )
}

export default NftBigCard