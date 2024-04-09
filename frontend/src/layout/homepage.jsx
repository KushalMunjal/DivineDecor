    import React from 'react'
    import { Link, Outlet } from 'react-router-dom'
    import Header from '../pages/header/Navbar';
    import Footer from '../pages/footer/Footer';

    function HomePage() {
    return (
        <div>
            <Header />
        <nav>
            <ul>
            <li>
                <Link to="/"></Link>
            </li>
            <li>
                <Link to="/about"></Link>
            </li>
            <li>
                <Link to="/products"></Link>
            </li>
            <li>
                <Link to="/login"></Link>
            </li>
            </ul>
        </nav>
        <Outlet />
        <Footer />
        </div>
    )
    }

    export default HomePage