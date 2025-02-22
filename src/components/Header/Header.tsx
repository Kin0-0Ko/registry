import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import SeaerchInput from '../SeaerchInput/SeaerchInput';


interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className='flex items-center justify-between px-4 border-b h-14'>
	<div className='flex items-center space-x-2 text-sm'>
    <Link to="/" className='text-lg font-bold '>NPM Registry</Link>
	</div>
	<div className='w-full max-w-xl ml-4'>
	<SeaerchInput/>
	</div>
  </div>
);

export default Header;
