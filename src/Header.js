import React from 'react'
import  './Header.css';
import logo from  './logo.png';
import icons from './icons.png';
import head from './h.png'


const Header = () => {
    return (
        <div>
            <div  className="upper-header-container">

                <div className='lorem-container-1'>
                    Lorem Ipsum
                </div>
                <div className='lorem-containe-2'>
                    Lorem Ipsum
                </div>
                <div  className='lorem-container-3'>
                    Lorem Ipsum
                </div>
            </div>
            <div className='middle-header-container'>
                <div className='middle-header-container-1'>
                    <img className='icons-middle-header-container-1' src={logo} />
                </div>
                <div>
                    <h2>LOGO</h2>
                </div>
                <div>
                    <img className='icons-middle-header-container-2' src={icons} />
                </div>
            </div>

         <div className='lower-header-container'>
            <div className='lower-header-container-1'>
                 SHOP
            </div>
            <div className='lower-header-container-1'>
                SKILL
            </div>
            <div className='lower-header-container-1'>
                STORIES
            </div>
            <div className='lower-header-container-1'>
                ABOUT
            </div>
            <div className='lower-header-container-1'>
                CONTACT US
            </div>
         </div>

         <div>
            <div className='lower-header-container-2'>
                <img  className='icons-lower-header-container-1' src={head} />
            </div>
         </div>
         <div className='header-end-line'></div>
        </div>
    )
}

export default Header