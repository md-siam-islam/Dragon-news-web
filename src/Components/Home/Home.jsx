
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Letestnews from '../Letestnews/Letestnews';
import Navabr from '../../Navbar/Navabr';

const Home = () => {
    return (
        <div>
            <section>
                <header>
                    <Header></Header>

                    <Letestnews></Letestnews>
                </header>

                <nav>
                    <Navabr></Navabr>
                </nav>
            </section>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;