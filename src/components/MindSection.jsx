import React, { useState } from 'react'
const MindSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === MindItem.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? MindItem.length - 1 : prevIndex - 1
    )
  }

  const MindItem = [
    { img: 'images/1.jpg' },
    { img: 'images/2.jpg' },
    { img: 'images/3.jpg' },
    { img: 'images/4.jpg' },
    { img: 'images/5.jpg' },
    { img: 'images/6.jpg' },
    { img: 'images/7.jpg' },
    { img: 'images/8.jpg' },
    { img: 'images/9.jpg' },
    { img: 'images/10.jpg' },
    { img: 'images/11.jpg' },
    { img: 'images/12.jpg' },
    { img: 'images/13.jpg' },
    { img: 'images/14.jpg' },
    { img: 'images/15.jpg' },
    { img: 'images/16.jpg' },
    { img: 'images/17.jpg' },
    { img: 'images/18.jpg' },
    { img: 'images/19.jpg' }
  ]

  return (
    <>
      <div className='max-w-[1200px] mx-auto my-7 px-4'>
        {/* Header Section */}
        <div className='flex flex-wrap items-center justify-between'>
          <h1 className='text-[20px] sm:text-[26px] font-bold'>
            What's on your mind?
          </h1>
          <div className='flex gap-4 mt-4 sm:mt-0'>
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-full flex justify-center items-center ${
                currentIndex === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-stone-400 hover:bg-stone-500 transition'
              } font-bold`}
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === MindItem.length - 10}
              className={`w-10 h-10 rounded-full flex justify-center items-center ${
                currentIndex === MindItem.length - 10
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-stone-400 hover:bg-stone-500 transition'
              } font-bold`}
            >
              Next
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className='relative mt-6 overflow-hidden'>
          <div
            className='flex transition-transform duration-300 ease-in-out gap-4 sm:gap-9'
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          >
            {MindItem.map((image, index) => (
              <a href='#' key={index}>
                <div className='min-w-[100px] sm:min-w-[140px] h-[100px] sm:h-[140px] flex justify-center items-center'>
                  <img
                    src={image.img}
                    alt={`Slide ${index + 1}`}
                    className='max-w-full max-h-full object-contain'
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <hr className='border-t-[1px] my-[30px] sm:my-[50px]' />
      </div>
    </>
  )
}
export default MindSection
