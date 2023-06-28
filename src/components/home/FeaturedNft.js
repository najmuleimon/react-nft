import { useEffect, useState } from 'react';
import CollectionCard from '../shared/CollectionCard'

const FeaturedNft = () => {
  const [allNft, setAllNft] = useState([]);

  useEffect(() => {
    fetch('data/featured-collections.json')
    .then(res => res.json())
    .then(data => setAllNft(data))
  }, [])

  return (
    <section className='py-8 pt-16 pb-24 bg-[#D9E0EC]/20'>
      <div className="container">
        <h2 className='text-xl md:text-[28px] font-integral font-bold pb-14'>Collection Featured NFTs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {
            allNft.map((item) => <CollectionCard key={item.id} data={item}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default FeaturedNft