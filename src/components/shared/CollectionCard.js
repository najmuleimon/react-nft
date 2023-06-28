import React from 'react'

const CollectionCard = ({data}) => {
  const {image, title, author, authorImg, item} = data || {};

  return (
    <div>
      <img src={require(`../../assets/images/${image}`)} alt="" className='w-full' />
      <h3 className='text-xl font-bold pb-[10px] pt-7'>{title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <div className="overflow-hidden rounded-full h-7 w-7">
            <img src={require(`../../assets/images/${authorImg}`)} alt="" className='w-full' />
          </div>
          <p className='text-sm font-medium'>by {author}</p>
        </div>
        <button type='button' className='py-[7px] px-3 border border-purple rounded-full text-purple text-xs font-bold transition-all duration-300 hover:bg-purple hover:text-white'>Total {item} Items</button>
      </div>
    </div>
  )
}

export default CollectionCard