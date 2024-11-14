import React from 'react';
import Header from '../Header/Header';
import Letestnews from '../Letestnews/Letestnews';
import Navabr from '../../Navbar/Navabr';
import Leftside from '../Leftside/Leftside';
import Rightside from '../Rightside/Rightside';
import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
            <Header></Header>
            <section >
                <Letestnews></Letestnews>
            </section>
            </header>
            <nav>
            <Navabr></Navabr>
            </nav>

            <main className='py-5 grid grid-cols-12 gap-3'>
                <aside className='col-span-3'>
                    <Leftside></Leftside>

                </aside>

                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3'>
                   <Rightside></Rightside>
                </aside>
            </main>
        </div>
    );
};

export default Roots;