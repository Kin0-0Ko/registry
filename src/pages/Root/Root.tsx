import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';


interface RootProps {}

const Root: FC<RootProps> = () => (
  <div className='container mx-auto px-20'>
    <Header/>
	<Outlet/>
  </div>
);

export default Root;
