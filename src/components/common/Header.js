import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {FiSearch} from 'react-icons/fi'
import {RiMenu3Fill} from 'react-icons/ri'
import {IoClose} from 'react-icons/io5'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='py-3 xl:py-7 border-b border-gray sticky top-0 w-full z-50 bg-white'>
      <div className="container">
        <div className="flex w-full items-center justify-between">
          <div className="logo flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <span className='hidden lg:inline-block mx-4 xl:mx-8 h-12 w-[1px] bg-[#F4F4F4]'></span>
          <button type='button' onClick={() => setShowMenu(true)} className='lg:hidden h-10 w-10 rounded bg-primary flex items-center justify-center'>
            <RiMenu3Fill className='text-white text-xl'/>
          </button>
          <div className={`${showMenu && 'show'} mob-overlay transition-all duration-300 lg:hidden`} onClick={() => setShowMenu(false)}></div>
          <div className={`${showMenu ? 'show-menu' : ''} menu-area transition-all duration-300 w-full`}>
            <button type='button' onClick={() => setShowMenu(false)} className='lg:hidden absolute top-3 right-3 h-10 w-10 flex items-center justify-center rounded-full bg-primary'>
              <IoClose className='text-xl text-white'/>
            </button>
            <div className="flex items-center justify-between w-full gap-2 menu-inner">
              <div className="mob-logo flex-shrink-0 lg:hidden">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <ul className="flex items-center gap-6 xl:gap-12">
                <li>
                  <Link to="#" className='text-base font-medium'>Marketplace</Link>
                </li>
                <li>
                  <Link to="#" className='text-base font-medium'>Resource</Link>
                </li>
                <li>
                  <Link to="#" className='text-base font-medium'>About</Link>
                </li>
              </ul>
              <ul className="flex items-center gap-5">
                <li>
                  <label htmlFor="search" className='w-full lg:w-44 xl:w-[300px] h-[50px] rounded-full border border-gray overflow-hidden flex items-center px-5'>
                    <input type="search" id="search" className='w-full h-full flex-grow text-base font-medium placeholder:text-base placeholder:text-[#c0c0c0] placeholder:font-medium' placeholder='Search'/>
                    <button type='button' className='flex-shrink-0'>
                      <FiSearch className='text-[#757575] text-xl'/>
                    </button>
                  </label>
                </li>
                <li>
                  <Link to="#" className='py-3 px-8 border-2 border-primary text-white bg-primary rounded-full text-sm font-bold transition-all duration-300 hover:bg-transparent hover:text-primary'>Upload</Link>
                </li>
                <li>
                  <Link to="#" className='py-3 px-5 text-primary bg-white rounded-full text-sm font-bold border-2 border-primary transition-all duration-300 hover:bg-primary hover:text-white'>Connect Wallet</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header