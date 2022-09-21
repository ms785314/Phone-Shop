import React from 'react';
import useReviews from '../../hooks/useReviews';
import img from '../../images/download.jfif'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='text-center mt-9'>

            <div className='py-6  grid grid-cols-2 gap-4 h-[60vh] px-14'>
                <div className=' flex flex-col items-center justify-center'>
                    <div className='text-6xl  font-bold text-justify   leading-tight'>YOUR NEXT <span className='text-blue-500'>GUITAR</span>
                        <br />
                        YOUR BEST <span className='text-blue-500'>GUITAR</span></div>

                    <button className='self-start font-bold text-2xl bg-blue-500 text-white ml-14 p-4 rounded hover:bg-blue-600 mt-7' >Shop Now</button>
                </div>
                <div style={{ border: '10px solid #2563EB' }} className='relative  bg-gray-300 rounded-lg'>
                    <div className='flex justify-center align-middle absolute w-full h-full left-6 top-10 '>

                        <img className='rounded-lg' src={img} alt="" />

                    </div>
                </div>
            </div>
            <div className='mt-14'>
                <h1 className='text-5xl font-bold'>Reviews:{reviews.length}</h1>

                <div>

                </div>
            </div>


        </div>
    );
};

export default Home;