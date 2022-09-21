import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full flex justify-center gap-x-4 font-bold py-4 text-xl'>
            <Link to='/home'>Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='dashboard'>Dash Board</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
        </div>
    );
};

export default Header;