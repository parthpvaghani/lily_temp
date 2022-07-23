import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../sections/Header';

export const AppLayout = () => {
  return (
    <>
    <Header/>
    <Outlet />
    </>
  )
}


export default AppLayout;