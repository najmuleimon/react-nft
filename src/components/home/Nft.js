import { useEffect, useState } from 'react'
import NftBigCard from '../shared/NftBigCard'
import NftSmallCard from '../shared/NftSmallCard';
import TopCollection from './TopCollection';

const Nft = () => {
  const [allNft, setAllNft] = useState([]);
  const highestBid = allNft.sort((a, b) => Number(b.placedBid) - Number(a.placedBid))

  useEffect(() => {
    fetch('data/nft.json')
    .then(res => res.json())
    .then(data => setAllNft(data))
  }, [])

  return (
    <section className='nft py-8 lg:py-[134px]'>
      <div className="container">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-[52px]">
          <div className='col-span-3 md:col-span-1'>
            {
              highestBid.slice(0,1).map((item) => <NftBigCard key={item.id} data={item}/>)
            }
          </div>

          <div className='col-span-3 md:col-span-1 space-y-2 md:space-y-4 lg:space-y-10'>
            {
              allNft.slice(0,3).map((item) => <NftSmallCard key={item.id} data={item}/>)
            }
          </div>

          <div className='col-span-3 md:col-span-2 xl:col-span-1'>
            <TopCollection/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nft