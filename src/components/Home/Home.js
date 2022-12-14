import React, { useState } from 'react';
import useReviews from '../../hooks/useReviews';
import img from '../../images/download.jfif'
import Review from '../Review/Review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    
    const [start, setStart] = useState(0);
    console.log('start', start);
    
    const handleForward = () => {
        if (start < reviews.length - 1) {

            setStart(start + 1)

        } else {
            setStart(0);
        }


    }
    const handleBackward = () => {
        if (start > 0) {
            setStart(start - 1)
        }else{
            setStart(reviews.length - 1);
        }

    }
    let bigger = true;

    // const [bigger, setBigger] = useState(false);
    // const navigator = useNavigate();

    let targetReviews = reviews.slice(start, start + 3);
    ;
    // const element = <FontAwesomeIcon icon={faCoffee} />

    // style={{clipPath:'polygon(0 0, 100% 0, 100% 80%, 0 100%)'}}

    return (
        <div className='text-center  mb-14 relative ' >
            <span className=' absolute left-0 h-[60%] z-[-10] w-full bg-blue-500' style={{clipPath:'polygon(0 0, 100% 0, 100% 70%, 0 100%)'}}></span>
            <div className='py-10 relative   grid grid-cols-2 gap-4 h-[60vh] px-14 ' >
            
                <div  className=' flex flex-col items-center justify-center'>
                    <div className='text-6xl  font-bold text-justify   leading-tight'>YOUR NEXT <span className='text-white'>GUITAR</span>
                        <br />
                        YOUR BEST <span className='text-white'>GUITAR</span></div>

                    <button className='self-start font-bold text-2xl bg-white  ml-14 p-4 rounded shadow-lg hover:shadow-none mt-7' >Shop Now</button>
                </div>
                <div className='relative  bg-blue-300 rounded-lg'>
                    <div className='flex justify-center align-middle absolute w-full h-full left-6 top-10 '>

                        <img className='rounded-lg' src={img} alt="" />

                    </div>
                </div>
            </div>
            <div className='mt-14 mb-14 px-5 '>
                <h1 className='text-3xl text-gray-600 font-bold mb-10'>Reviews</h1>

                <div className='flex justify-center gap-4'>
                    <button className='bg-blue-500 hover:bg-blue-600 p-4 self-center text-white font-bold' onClick={handleBackward}>  <FontAwesomeIcon icon={faArrowLeft} /></button>

                    <div className='flex justify-center gap-3'>
                        {targetReviews.length === 3 ?
                            targetReviews.map(review => {
                                bigger = !bigger;
                                return (
                                    
                                    <Review bigger={bigger} key={review.id} review={review}
                                        willBigger={start + 2}
                                    ></Review>
                                )
                                
                            })
                            : (targetReviews = [...targetReviews, ...reviews.slice(0, 3 - targetReviews.length)]).map(review => {
                                // setBigger(!bigger);
                                bigger = !bigger;
                                return (
                                    
                                    <Review bigger={bigger} key={review.id} review={review}
                                        willBigger={start + 2}
                                    ></Review>
                                )
                            })

                        }
                    </div>
                    <button className='bg-blue-500 p-4 self-center text-white font-bold  hover:bg-blue-600' onClick={handleForward}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>


            <Link to='/reviews' className='bg-blue-500 hover:bg-blue-600 p-4 rounded font-bold text-xl text-white absolute right-14 bottom-[-30px]'>Show All</Link>
            {/* <button onClick={()=> navigator('/reviews')} className='bg-blue-500 p-4 rounded-lg font-bold text-xl text-white absolute right-14 bottom-[-30px]'>Show All</button> */}
        </div>
    );
};

export default Home;