import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
    
    return (
        <div className='w-full bg-blue-500 flex justify-center gap-x-4 font-bold py-4 text-xl text-white'>
            <Link     to='/home'>Home</Link>
            <Link  to='/reviews'>Reviews</Link>
            <Link to='dashboard'>Dash Board</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link  to='/login'>Log In</Link>

            {/* <NavLink onClick={e => check(e)} to='/home' activeclassname='okbut' className='text-red-600'>Triyng</NavLink> */}
        </div>
    );
};

export default Header;