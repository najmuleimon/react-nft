import { FaEthereum } from 'react-icons/fa';
import CountDownTimer from './CountDownTimer';
import CountDown from './CountDown';

const NftCard = ({data}) => {
  const {image, biders, author, price, stock, placedBid, timeLeft} = data || {}

  return (
    <div className='p-[10px] bg-white rounded-[14px] border border-[#F2F2F2]/50'>
      <div className="w-full h-56 rounded-[14px] overflow-hidden">
        <img src={require(`../../assets/images/${image}`)} alt="" className='w-full h-full object-cover' />
      </div>
      <ul className='flex items-center -mt-4 ml-3 -space-x-3'>
        {
          biders.map(({image}, i) => (
            <li key={i} className='h-8 w-8 rounded-full border-2 border-white overflow-hidden'>
              <img src={require(`../../assets/images/${image}`)} alt="" className='w-full' />
            </li>
          ))
        }
      </ul>
      <h3 className='font-bold text-xl py-[10px]'>{author}</h3>
      <div className="flex items-center justify-between mb-5">
        <h6 className='flex fap-1 items-center text-[10px] text-green font-bold'>
          <FaEthereum/>
          {price} ETH
        </h6>

        <p className='text-sm font-medium text-[#838383]'>{placedBid} of {stock}</p>
      </div>

      <div className="flex items-center justify-between pt-[10px] border-t border-[#F4F4F4]">
        {/* <CountDownTimer targetDate={dateTimeAfterThreeDays}/> */}
        <CountDown targetDate={timeLeft} />
        <button type='button' className='text-base font-medium text-[#4F33A3]'>Place a bid</button>
      </div>
    </div>
  )
}

export default NftCard