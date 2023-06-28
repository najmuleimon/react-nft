import { FaEthereum } from 'react-icons/fa'
import tick from '../../assets/images/verify.svg'

const NftListCard = ({data, index}) => {
  const {image, price, ratio, color, verified} = data || {};

  return (
    <div className='flex items-center py-4 first:pt-0 last:pb-0 gap-x-2 sm:gap-x-5'>
      <h3 className='text-2xl font-bold'>{index + 1}</h3>
      <div className="relative flex-shrink-0">
        <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
          <img src={require(`../../assets/images/${image}`)} alt="" className='w-full' />
        </div>
        {
          verified && <img src={tick} alt="" className='absolute -top-1 -right-1' />
        }
      </div>

      <div>
        <h4 className='text-base font-medium pb-2'>CryptoFunks</h4>
        <p className='flex items-center gap-[6px] text-sm font-semibold text-[#636363]'>
          <FaEthereum className='text-2xl text-black'/>
          {Number(price).toLocaleString("en-US")}
        </p>
      </div>

      <h5 className="text-xl font-semibold" style={{color: color}}>+{ratio}%</h5>
    </div>
  )
}

export default NftListCard