import React from 'react';
import Navbar from './pages/header/Navbar'; // Adjust the path if needed
import Footer from './pages/footer/Footer'; // Adjust the path if needed
import dummyData from './components/Product/dummydata';
import ProductCard from './components/Product/Products'; // Adjust the path if needed

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-4">
        {dummyData.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            reviews={product.reviews}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
