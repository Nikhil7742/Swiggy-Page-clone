import { FcRating } from 'react-icons/fc'
export default function Products () {
  const ProductItem = [
    {
      image: 'item1.jpg',
      offer: 'Items at ₹179',
      title: 'Chinese Wok',
      rating: 4.2,
      minTime: 30,
      maxTime: 40,
      place: 'New Jodhpur'
    },
    {
      image: 'item2.jpg',
      offer: '₹50 OFF ABOVE ₹199',
      title: 'Pizza Hut',
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      place: 'Shastri Nagar'
    },
    {
      image: 'item3.jpg',
      offer: '₹85 OFF ABOVE ₹149',
      title: "Domino's Pizza",
      rating: 4.3,
      minTime: 35,
      maxTime: 40,
      place: 'Sardarpura'
    },
    {
      image: 'item4.jpg',
      offer: '₹70 OFF ABOVE ₹149',
      title: 'The Belgian Waffle Co.',
      rating: 4.5,
      minTime: 25,
      maxTime: 25,
      place: 'Chopsani Housing Board'
    },
    {
      image: 'item5.jpg',
      offer: '₹1-5 OFF ABOVE ₹179',
      title: 'Burger King',
      rating: 4.4,
      minTime: 30,
      maxTime: 35,
      place: 'Shastri Nagar'
    },
    {
      image: 'item6.jpg',
      offer: '₹100 OFF ABOVE ₹499',
      title: 'Subway',
      rating: 4.7,
      minTime: 25,
      maxTime: 30,
      place: 'Sardarpura'
    },
    {
      image: 'item2.jpg',
      offer: '₹50 OFF ABOVE ₹199',
      title: 'Pizza Hut',
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      place: 'Shastri Nagar'
    },
    {
      image: 'item3.jpg',
      offer: '₹85 OFF ABOVE ₹149',
      title: "Domino's Pizza",
      rating: 4.3,
      minTime: 35,
      maxTime: 40,
      place: 'Sardarpura'
    },
    {
      image: 'item1.jpg',
      offer: 'Items at ₹179',
      title: 'Chinese Wok',
      rating: 4.2,
      minTime: 30,
      maxTime: 40,
      place: 'New Jodhpur'
    },
    {
      image: 'item2.jpg',
      offer: '₹50 OFF ABOVE ₹199',
      title: 'Pizza Hut',
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      place: 'Shastri Nagar'
    },
    {
      image: 'item3.jpg',
      offer: '₹85 OFF ABOVE ₹149',
      title: "Domino's Pizza",
      rating: 4.3,
      minTime: 35,
      maxTime: 40,
      place: 'Sardarpura'
    },
    {
      image: 'item1.jpg',
      offer: 'Items at ₹179',
      title: 'Chinese Wok',
      rating: 4.2,
      minTime: 30,
      maxTime: 40,
      place: 'New Jodhpur'
    },
    {
      image: 'item2.jpg',
      offer: '₹50 OFF ABOVE ₹199',
      title: 'Pizza Hut',
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      place: 'Shastri Nagar'
    },
    {
      image: 'item3.jpg',
      offer: '₹85 OFF ABOVE ₹149',
      title: "Domino's Pizza",
      rating: 4.3,
      minTime: 35,
      maxTime: 40,
      place: 'Sardarpura'
    },
    {
      image: 'item4.jpg',
      offer: '₹70 OFF ABOVE ₹149',
      title: 'The Belgian Waffle Co.',
      rating: 4.5,
      minTime: 25,
      maxTime: 25,
      place: 'Chopsani Housing Board'
    },
    {
      image: 'item5.jpg',
      offer: '₹1-5 OFF ABOVE ₹179',
      title: 'Burger King',
      rating: 4.4,
      minTime: 30,
      maxTime: 35,
      place: 'Shastri Nagar'
    },
    {
      image: 'item6.jpg',
      offer: '₹100 OFF ABOVE ₹499',
      title: 'Subway',
      rating: 4.7,
      minTime: 25,
      maxTime: 30,
      place: 'Sardarpura'
    },
    {
      image: 'item2.jpg',
      offer: '₹50 OFF ABOVE ₹199',
      title: 'Pizza Hut',
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      place: 'Shastri Nagar'
    },
    {
      image: 'item3.jpg',
      offer: '₹85 OFF ABOVE ₹149',
      title: "Domino's Pizza",
      rating: 4.3,
      minTime: 35,
      maxTime: 40,
      place: 'Sardarpura'
    },
    {
      image: 'item1.jpg',
      offer: 'Items at ₹179',
      title: 'Chinese Wok',
      rating: 4.2,
      minTime: 30,
      maxTime: 40,
      place: 'New Jodhpur'
    }
  ]

  return (
    <>
      <div className='max-w-[1200px] mx-auto flex flex-wrap gap-9 '>
        {ProductItem.map((item, i) => {
          return (
            <div className='itemBox max-w-[210px] rounded-[10px] overflow-hidden cursor-pointer shadow-md mx-auto'>
              <img src={`images/${item.image}`} alt='' className=' w-full' />
              <div className='p-2'>
                <h4 className='font-bold text-[18px]'> {item.title}</h4>
                <h5 className='font-semibold text-[16px]'>
                  <FcRating className='inline me-2' />
                  {item.rating}
                </h5>
                <p className='text-[16px]'>
                  {item.minTime}-{item.maxTime}Mins
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
