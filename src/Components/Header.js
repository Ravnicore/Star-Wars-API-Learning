import React from 'react';
import StarWarsLogo from '../Images/star_wars_logo.png';

const Header = () => {
	return (
		<div className='flex flex-row justify-center titleText'>
            <h1 className='SW1'>
              <img src={StarWarsLogo} alt='STAR WARS' />
            </h1>
        </div>
	);
}

export default Header;