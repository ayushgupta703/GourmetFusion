import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => (
    <>
        <div className='info_Parent'>
            <div className='info'>
                <p>Chase The New Flavour</p>
                <h1>The Key To Fine <br /> Dining</h1>
                <p className='infoMsg'>Experience the art of fine dining with our expertly <br /> crafted dishes and exceptional service.</p>
                <button className='btn'><Link to='/menu'>Explore Menu</Link></button>
            </div>
            <div className='info_img'>
                <img src='https://b.zmtcdn.com/data/pictures/9/19106349/a89282f548ddd56866683ab4211a9bef.jpg?fit=around|750:500&crop=750:500;*,*' alt='infoImg.jpg'></img>
            </div>
        </div>
    </>
)
export default Header;