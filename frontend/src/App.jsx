import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/header/Navbar'; // Adjust the path if needed
import Footer from './pages/footer/Footer'; // Adjust the path if needed
import dummyData from './components/Product/dummydata';
import ProductCard from './components/Product/Products'; // Adjust the path if needed

import Login from './pages/login/login';
import Home from './pages/home/home';
import AboutUsPage from './pages/about/about';
import HomePage from './layout/homepage';
import ProductList from './components/Product/Products';

function App() {
  // return (
  //   <div className="App">
  //     <Navbar />
  //     <Home/>
  //     {/* <Home/> */}
  //     {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-4">
  //       {dummyData.map((product, index) => (
  //         <ProductCard
  //           key={index}
  //           name={product.name}
  //           reviews={product.reviews}
  //           price={product.price}
  //           image={product.image}
  //         />
  //       ))}
  //     </div> */}
  //     <Footer />
  //   </div>
  // );
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="products" element={<ProductList />} />
        <Route path="*" element={<Login />} />
      </Route>
    </Routes>
    </BrowserRouter>)
}

export default App;
