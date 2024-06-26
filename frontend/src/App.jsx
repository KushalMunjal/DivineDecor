import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/header/Navbar'; 
import Footer from './pages/footer/Footer'; 
import dummyData from './components/Product/dummydata';
import ProductCard from './components/Product/Products'; 

import Login from './pages/login/login';
import Home from './pages/home/home';
import AboutUsPage from './pages/about/about';
import HomePage from './layout/homepage';
import ProductList from './components/Product/Products';
import BookMurti from './components/Book/bookMurti';
import BookMandap from './components/Book/bookMandap';
import DisplayCardList from './components/Product/DisplayProducts';
import ProductDetails from './components/Product/ProductDetails';
import SingleProduct from './components/Product/ProductDetails';
import ProductUploadForm from './components/Testing/UploadProduct';
import OrdersList from './pages/orders/OrdersList';
import ImageUploadForm from './components/Testing/UploadProduct';
import Error from './pages/error/error';
import CheckoutPage from './pages/checkout/checkout';

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
        <Route path="displayprod" element={<DisplayCardList />} />
        <Route path="bookmandap" element={<BookMandap />} />
        <Route path="bookmurti" element={<BookMurti />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="products" element={<ProductList />} />
        <Route path="test" element={<ImageUploadForm />} />
        <Route path="orders" element={<OrdersList />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    </BrowserRouter>)
}

export default App;
