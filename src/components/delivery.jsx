import Products from './Products'
export default function Delivery () {
  const FilterArray = [
    'Filter',
    'Sort By',
    'Fast Delivery',
    'New on Swiggy',
    'Ratings 4.0+',
    'Pure Veg',
    'Offers',
    'Rs. 300-Rs. 600',
    'Less than Rs. 300'
  ]

  return (
    <>
      <div className='max-w-[1200px] mx-auto px-4'>
        {/* Header Section */}
        <div>
          <h2 className='text-[20px] md:text-[25px] font-bold text-center md:text-left'>
            Restaurants with online food delivery in Jaipur
          </h2>
        </div>

        {/* Filters Section */}
        <div className='flex flex-wrap gap-3 justify-center md:justify-between my-5 sticky top-0 bg-white py-4 z-[2]'>
          {FilterArray.map((data, i) => (
            <div
              key={i}
              className='cursor-pointer flex justify-center items-center font-semibold px-4 md:px-[20px] py-2 md:py-[7px] shadow-sm border rounded-md md:rounded-[10px] text-sm md:text-base'
            >
              {data}
            </div>
          ))}
        </div>

        <Products />
      </div>
    </>
  )
}
