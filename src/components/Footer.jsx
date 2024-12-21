export default function Footer () {
  return (
    <>
      <footer className='w-full bg-[#f0efef] py-7 mt-[80px]'>
        <div className='max-w-[1200px] mx-auto px-4'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[50%] mb-6 md:mb-0'>
              <h3 className='font-bold text-[28px]'>
                For a better experience, download the Swiggy app now
              </h3>
            </div>
            <div className='w-full md:w-[50%] flex sm:gap-5 justify-center md:justify-start'>
              <img
                src='images/play_store.png'
                alt='Google Play Store'
                className='h-[64px] w-[208px]'
              />
              <img
                src='images/app_store.png'
                alt='Apple App Store'
                className='h-[64px] w-[208px]'
              />
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-8 mt-[70px]'>
            <div className='flex flex-col md:w-[20%]'>
              <div className='flex gap-6 items-center'>
                <img
                  src='images/logo.png'
                  alt='Swiggy Logo'
                  className='w-[60px]'
                />
                <h5 className='font-bold text-[30px] text-[#f57f31]'>Swiggy</h5>
              </div>
              <p className='text-gray-600 font-semibold mt-2'>
                © 2024 Swiggy Limited
              </p>
            </div>

            <div className='flex-1'>
              <ul className='text-gray-600 font-semibold leading-10'>
                <li className='font-bold text-[18px] text-black'>Company</li>
                <li>
                  <a href='/about-us'>About Us</a>
                </li>
                <li>
                  <a href='/corporate'>Swiggy Corporate</a>
                </li>
                <li>
                  <a href='/careers'>Careers</a>
                </li>
                <li>
                  <a href='/team'>Team</a>
                </li>
                <li>
                  <a href='/swiggy-one'>Swiggy One</a>
                </li>
                <li>
                  <a href='/instamart'>Swiggy Instamart</a>
                </li>
                <li>
                  <a href='/dineout'>Swiggy Dineout</a>
                </li>
                <li>
                  <a href='/genie'>Swiggy Genie</a>
                </li>
              </ul>
            </div>

            <div className='flex-1 '>
              <ul className='text-gray-600 font-semibold leading-10 mb-10'>
                <li className='font-bold text-[18px] text-black'>Contact us</li>
                <li>
                  <a href='/support'>Help & Support</a>
                </li>
                <li>
                  <a href='/partner'>Partner with us</a>
                </li>
                <li>
                  <a href='/ride'>Ride with us</a>
                </li>
              </ul>
              <ul className='text-gray-600 font-semibold leading-10'>
                <li className='font-bold text-[18px] text-black'>Legal</li>
                <li>
                  <a href='/terms'>Terms & Conditions</a>
                </li>
                <li>
                  <a href='/cookie-policy'>Cookie Policy</a>
                </li>
                <li>
                  <a href='/privacy-policy'>Privacy Policy</a>
                </li>
                <li>
                  <a href='/investors'>Investor Relations</a>
                </li>
              </ul>
            </div>

            <div className='flex-1'>
              <ul className='text-gray-600 font-semibold leading-10'>
                <li className='font-bold text-[18px] text-black'>
                  Available in:
                </li>
                <li>
                  <a href='/bangalore'>Bangalore</a>
                </li>
                <li>
                  <a href='/gurgaon'>Gurgaon</a>
                </li>
                <li>
                  <a href='/hyderabad'>Hyderabad</a>
                </li>
                <li>
                  <a href='/delhi'>Delhi</a>
                </li>
                <li>
                  <a href='/mumbai'>Mumbai</a>
                </li>
                <li>
                  <a href='/pune'>Pune</a>
                </li>
              </ul>
            </div>

            <div className='flex-1'>
              <ul className='text-gray-600 font-semibold leading-10 mb-10'>
                <li className='font-bold text-[18px] text-black'>
                  Life at Swiggy
                </li>
                <li>
                  <a href='/explore'>Explore with Swiggy</a>
                </li>
                <li>
                  <a href='/news'>Swiggy News</a>
                </li>
                <li>
                  <a href='/snackables'>Snackables</a>
                </li>
              </ul>
              <ul className='text-gray-600 font-semibold leading-10'>
                <li className='font-bold text-[18px] text-black'>
                  Social Links
                </li>
              </ul>
              <div className='flex gap-4'>
                <a
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='images/icon-linkedin.png'
                    alt='LinkedIn'
                    className='w-[16px] h-[18px]'
                  />
                </a>
                <a
                  href='https://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='images/icon-instagram.png'
                    alt='Instagram'
                    className='w-[16px] h-[18px]'
                  />
                </a>
                <a
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='images/icon-facebook.png'
                    alt='Facebook'
                    className='w-[12px] h-[18px]'
                  />
                </a>
                <a
                  href='https://pinterest.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='images/icon-pinterest.png'
                    alt='Pinterest'
                    className='w-[16px] h-[18px]'
                  />
                </a>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='images/icon-twitter.png'
                    alt='Twitter'
                    className='w-[16px] h-[18px]'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
