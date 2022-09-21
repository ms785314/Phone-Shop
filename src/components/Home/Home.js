import React, { useState } from 'react';
import useReviews from '../../hooks/useReviews';
import img from '../../images/download.jfif'
import Review from '../Review/Review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    // let a = 2;
    const [start, setStart] = useState(0);

    const handleForward = () => {
        if (start < reviews.length - 3) {
            setStart(start + 1)
        }
        
    }
    const handleBackward = () => {
        if (start > 0) {
            setStart(start - 1)
        }
        
    }

    // const element = <FontAwesomeIcon icon={faCoffee} />

    return (
        <div className='text-center mt-9 mb-14'>

            <div className='py-6  grid grid-cols-2 gap-4 h-[60vh] px-14'>
                <div className=' flex flex-col items-center justify-center'>
                    <div className='text-6xl  font-bold text-justify   leading-tight'>YOUR NEXT <span className='text-blue-500'>GUITAR</span>
                        <br />
                        YOUR BEST <span className='text-blue-500'>GUITAR</span></div>

                    <button className='self-start font-bold text-2xl bg-blue-500 text-white ml-14 p-4 rounded hover:bg-blue-600 mt-7' >Shop Now</button>
                </div>
                <div className='relative  bg-blue-300 rounded-lg'>
                    <div className='flex justify-center align-middle absolute w-full h-full left-6 top-10 '>

                        <img className='rounded-lg' src={img} alt="" />

                    </div>
                </div>
            </div>
            <div className='mt-14 mb-14 px-5 '>
                <h1 className='text-5xl font-bold mb-10'>Reviews:{reviews.length}</h1>

                <div className='flex justify-center gap-4'>
                <button className='bg-blue-500 hover:bg-blue-600 p-4 self-center text-white font-bold' onClick={handleBackward}>  <FontAwesomeIcon icon={faArrowLeft} /></button>
                    
                    <div className='flex justify-center gap-3'>
                        {
                            reviews.slice(start,start+3).map(review => <Review key={review.id} review={review}></Review>)
                        }
                    </div>
                    <button className='bg-blue-500 p-4 self-center text-white font-bold  hover:bg-blue-600' onClick={handleForward}><FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>


                
        </div>
    );
};

export default Home;