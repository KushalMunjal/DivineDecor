import React from 'react';

const products = [
  {
    id: 1,
    title: 'Custom Idols',
    description: 'Order customizable idols for your home.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Custom Mandaps',
    description: 'Book custom mandaps for your special occasions.',
    image: 'https://via.placeholder.com/300',
  },
  // Add more products as needed
];

const DisplayCard = ({ title, description, image }) => (
  <div className="flex-shrink-0 w-64 mr-4">
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const DisplayCardList = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
    <div className="flex overflow-x-auto">
      {products.map((product) => (
        <DisplayCard
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  </div>
);

export default DisplayCardList;
