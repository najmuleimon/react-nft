import { useEffect, useState } from 'react';
import {IoFilterOutline} from 'react-icons/io5';
import NftCard from '../shared/NftCard';
import { Link } from 'react-router-dom';

const DiscoverNft = () => {
  const [allNft, setAllNft] = useState([]);
  const [filterNft, setFilterNft] = useState([]);
  const [active, setActive] = useState("all categories");
  const categories = ["all categories", "Art", "Celebrities", "Gaming", "Sport", "Music", "Crypto"];

  useEffect(() => {
    fetch('data/nft.json')
    .then(res => res.json())
    .then(data => {
      setAllNft(data)
      setFilterNft(data)
    })
  }, [])

  const handleFilter = (category) => {
    if(category.trim().toLowerCase() === "all categories"){
      setFilterNft(allNft)
      setActive("all categories")
    }
    else{
      setFilterNft(allNft.filter((item) => item.category.trim().toLowerCase() === category.trim().toLowerCase()))
      setActive(category)
    }
  }

  return (
    <section className='py-8 lg:pt-16 lg:pb-12 bg-[#D9E0EC]/20'>
      <div className="container">
        <h2 className='font-integral text-xl lg:text-[34px] lg:leading-[46px] font-bold pb-9'>Discover more NFTs</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <ul className='flex flex-col md:flex-row items-center gap-1 lg:gap-3'>
            {
              categories.map((item, i) => (
                <li key={i}>
                  <button type='button' onClick={() => handleFilter(item)} className={`${active === item ? 'bg-primary text-white' : 'bg-[#DCDCDC]/20'} py-2 px-3 lg:px-5 rounded-full text-sm font-medium capitalize`}>{item}</button>
                </li>
              ))
            }
          </ul>

          <button type='button' className='py-2 px-5 rounded-full bg-[#DCDCDC]/20 text-sm text-[#371C87] font-medium capitalize flex items-center gap-2 transition-all duration-300 hover:bg-primary hover:text-white'>
            <IoFilterOutline className='text-xl'/>
            All Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-9">
          {
            filterNft.map((item) => <NftCard key={item.id} data={item}/>)
          }
          {
            filterNft.length === 0 && <p className='text-sm font-medium'>No data found!</p>
          }
        </div>

        <div className="flex items-center justify-center w-full mt-14">
          <Link to="#" className='py-2 lg:py-4 px-10 border-2 border-[#4F33A3] text-primary rounded-full text-xl font-medium transition-all duration-300 hover:bg-primary hover:text-white'>More NFTs</Link>
        </div>
      </div>
    </section>
  )
}

export default DiscoverNft