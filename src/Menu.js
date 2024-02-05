import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Menu=()=>{
    return (
        <>
            <nav className='nav_menu'>
            <ul className='nav_list'>
                <li>home</li>
                <li>about</li>
                <li>contact us</li>
            </ul>
            </nav>
            <div className='mobile_menu_div'>
            <MenuOutlinedIcon className='mobile_open_menu'/>
            <CloseOutlinedIcon className='mobile_close_menu'/>
            </div>
        </>
    );
}
export default Menu;