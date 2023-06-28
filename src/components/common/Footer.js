import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-dark.png'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import linkedin from '../../assets/images/linkedin.svg'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="py-8 lg:pt-20 lg:pb-16">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="xl:max-w-[333px]">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
                <p className='text-sm text-[#565656] pt-7 pb-8'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                <ul className='flex items-center gap-4'>
                  <li>
                    <Link to="#">
                      <img src={facebook} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={twitter} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={linkedin} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h4 className='text-lg font-bold pb-6'>Market Place</h4>
              <ul>
                <li>
                  <Link to="#" className='text-sm font-medium text-[#3D3D3D] transition-all duration-300 hover:text-primary'>All NFTs</Link>
                </li>
                <li>
                  <Link to="#" className='text-sm font-medium text-[#3D3D3D] transition-all duration-300 hover:text-primary'>New</Link>
                </li>
                <li>
                  <Link to="#" className='text-sm font-medium text-[#3D3D3D] transition-all duration-300 hover:text-primary'>Art</Link>
                </li>
                <li>
                  <Link to="#" className='text-sm font-medium text-[#3D3D3D] transition-all duration-300 hover:text-primary'>Sports</Link>
                </li>
                <li>
                  <Link to="#" className='text-sm font-medium text-[#3D3D3D] transition-all duration-300 hover:text-primary'>Utility</Link>
                </li>
                <li>
                  <Link to="#" className='text-sm font-medium text-[#3D3D3D] transition-all duration-300 hover:text-primary'>Music</Link>
                </li>
                <li>
                  <Link to="#" className='text-sm font-medium text-[#3D3D3D] transition-all duration-300 hover:text-primary'>Domain Name</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h4 className='text-lg font-bold pb-6'>My Account</h4>
              <ul>
                <li>
                  <Link to="#" className='text-sm font-medium text-[#3D3D3D] transition-all duration-300 hover:text-primary'>Profile</Link>
                </li>
                <li>
                  <Link to="#" className='text-sm font-medium text-[#3D3D3D] transition-all duration-300 hover:text-primary'>Favorite</Link>
                </li>
                <li>
                  <Link to="#" className='text-sm font-medium text-[#3D3D3D] transition-all duration-300 hover:text-primary'>My Collections</Link>
                </li>
                <li>
                  <Link to="#" className='text-sm font-medium text-[#3D3D3D] transition-all duration-300 hover:text-primary'>Settings</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <h4 className='text-lg font-bold pb-6'>Stay in the loop</h4>
              <p className='text-sm text-[#363639] pb-6'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
              <label htmlFor="emal" className='flex items-center w-full rounded-full border-2 border-[#F1F1F1] p-1'>
                <input type="email" id="email" placeholder='Enter your email address..' className='h-full w-full flex-grow px-3 text-xs placeholder:text-xs placeholder:text-[#959595]' />
                <button type='button' className='flex-shrink-0 rounded-full text-white py-[13px] px-7 border border-[#2639ED] text-xs bg-[#2639ED] transition-all duration-300 hover:bg-transparent hover:text-[#2639ED]'>Subscibe Now</button>
              </label>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F4F4F4] pt-4 pb-6 text-center">
          <p className='text-center text-sm text-[#A4A4A4]'>Copyright &copy; 2022 Avi Yansah</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer