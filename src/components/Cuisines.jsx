export default function Cuisines () {
  const places = [
    'Chinese',
    'South Indian',
    'Indian',
    'Kerla',
    'Korean',
    'North Indian',
    'Seafood',
    'Bengali',
    'Punjabi',
    'Italian',
    'Andhra',
    'Show More'
  ]

  return (
    <>
      <div className='max-w-[1200px] mx-auto my-[60px] px-4'>
        <h2 className='font-bold text-[24px] sm:text-[30px]'>
          Best Cuisines Near Me
        </h2>
        <div className='flex flex-wrap gap-4 sm:gap-6 mt-4'>
          {places.map((place, i) => (
            <div
              key={i}
              className='cursor-pointer w-full sm:w-[220px] border-[1px] font-semibold rounded-md shadow-sm px-4 sm:px-6 py-2 text-center'
            >
              {`${place} Restaurant Near Me`}
            </div>
          ))}
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto px-4'>
        <h2 className='font-bold text-[24px] sm:text-[30px]'>
          Explore Every Restaurant Near Me
        </h2>
        <div className='flex flex-wrap gap-4 sm:gap-6 mt-4'>
          <div className='cursor-pointer w-full sm:w-[220px] border-[1px] font-semibold rounded-md shadow-sm px-4 sm:px-6 py-2 text-center'>
            Explore Restaurants Near Me
          </div>
          <div className='cursor-pointer w-full sm:w-[220px] border-[1px] font-semibold rounded-md shadow-sm px-4 sm:px-6 py-2 text-center'>
            Explore Top Rated Restaurants Near Me
          </div>
        </div>
      </div>
    </>
  )
}
