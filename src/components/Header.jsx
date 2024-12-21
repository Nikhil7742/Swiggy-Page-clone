import { IoIosArrowDown } from 'react-icons/io'
import { FiShoppingBag } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'
import { BiSolidOffer } from 'react-icons/bi'
import { IoMdHelpBuoy } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { FaShoppingCart } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'
import { useState } from 'react'

function Header () {
  const [toggle, setToggle] = useState(false)
  const [area, setArea] = useState('')

  const showSideMenu = () => setToggle(true)
  const hideSideMenu = () => setToggle(false)

  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 duration-500 ${
          toggle ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={hideSideMenu}
      >
        {/* Sidebar */}
        <div
          className={`w-[85%] md:w-[400px] h-full bg-white shadow-lg duration-500 absolute ${
            toggle ? 'left-0' : '-left-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          {/* Sidebar Content */}
          <div className='p-6'>
            <GiCancel
              className='mb-6 text-[20px] cursor-pointer'
              onClick={hideSideMenu}
            />
            <div>
              <input
                type='text'
                placeholder='Search for area name...'
                className='search shadow-md w-full p-3 border border-gray-300 rounded-md max-w-[320px]'
                value={area}
                onChange={e => setArea(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    hideSideMenu()
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className='p-4 shadow-xl bg-white '>
        <div className='max-w-[1200px] mx-auto flex items-center justify-between'>
          {/* Logo */}
          <div className='w-[40px] md:w-[50px]'>
            <img src='images/logo.png' alt='Website Logo' className='w-full' />
          </div>

          {/* Location with Dropdown Icon */}
          <div className='hidden sm:flex text-[#555454] items-center'>
            <span className='font-bold border-b-[3px] border-black mr-2'>
              {area}
            </span>
            <span className='truncate'>Janakpuri, Kidwai Nagar, Tonk</span>
            <IoIosArrowDown
              className='inline text-orange-600 text-[20px] cursor-pointer ml-2'
              onClick={showSideMenu}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className='block sm:hidden'>
            <IoIosArrowDown
              className='text-orange-600 text-[24px] cursor-pointer'
              onClick={showSideMenu}
            />
          </div>

          {/* Navigation Links */}
          <nav className='hidden lg:block'>
            <ul className='flex gap-6 text-[#555454] font-medium'>
              <li className='cursor-pointer flex items-center gap-2 hover:text-[#FF8800]'>
                <FiShoppingBag className='text-[20px]' /> Swiggy Corporate
              </li>
              <li className='cursor-pointer flex items-center gap-2 hover:text-[#FF8800]'>
                <FaSearch className='text-[20px]' /> Search
              </li>
              <li className='cursor-pointer flex items-center gap-2 hover:text-[#FF8800]'>
                <BiSolidOffer className='text-[20px]' /> Offers
              </li>
              <li className='cursor-pointer flex items-center gap-2 hover:text-[#FF8800]'>
                <IoMdHelpBuoy className='text-[20px]' /> Help
              </li>
              <li className='cursor-pointer flex items-center gap-2 hover:text-[#FF8800]'>
                <CgProfile className='text-[20px]' /> Sign In
              </li>
              <li className='cursor-pointer flex items-center gap-2 hover:text-[#FF8800]'>
                <FaShoppingCart className='text-[20px]' /> Cart
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
