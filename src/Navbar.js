import React from 'react';
import Menu from './Menu';
import Logo from './Logo';

const Navbar=()=>{
    return (
        <>
            <div className='navbar'>
            <Logo/>
            <Menu/>
            </div>
        </>
    );
}
export default Navbar;