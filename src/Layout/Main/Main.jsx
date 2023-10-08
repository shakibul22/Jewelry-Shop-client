import React from 'react';
import NavBar from '../../Pages/SharedPages/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/SharedPages/Footer';

const Main = () => {
    return (
        <div className="" >
        <NavBar />
        <Outlet />
        <Footer />
    </div>
    );
};

export default Main;