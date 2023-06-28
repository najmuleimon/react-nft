import { useEffect, useState } from 'react'
import NftListCard from '../shared/NftListCard';

const TopCollection = () => {
  const [allCollection, setAllCollection] = useState([]);

  useEffect(() => {
    fetch('data/top-collections.json')
    .then(res => res.json())
    .then(data => setAllCollection(data))
  }, [])

  return (
    <div className='w-full'>
      <h3 className='text-xl font-bold font-integral pb-2'>Top Collections over </h3>
      <p className='text-lg font-bold text-primary'>Last 7 days</p>
      <div className='mt-8 divide-y divide-[#F0F0F0]'>
        {
          allCollection.map((item, i) => <NftListCard key={item.id} data={item} index={i}/>)
        }
      </div>
    </div>
  )
}

export default TopCollection