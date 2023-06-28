import icon1 from '../../assets/images/card-tick.svg'
import icon2 from '../../assets/images/chart-square.svg'

const About = () => {
  return (
    <section className='about py-8 lg:pt-[122px] lg:pb-24 bg-[#D9E0EC]/20'>
      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-10 xl:gap-14">
          <div className="col-span-12 lg:col-span-5">
            <h2 className='font-bold font-integral text-xl lg:text-[28px] lg:leading-[42px]'>The amazing NFT art of the world here</h2>
          </div>

          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 xl:gap-14">
            <div className="flex items-start gap-4">
              <img src={icon1} alt="" />
              <div>
                <h3 className='text-xl font-bold pb-3'>Fast Transaction</h3>
                <p className='text-sm text-[#696969]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src={icon2} alt="" />
              <div>
                <h3 className='text-xl font-bold pb-3'>Fast Transaction</h3>
                <p className='text-sm text-[#696969]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About