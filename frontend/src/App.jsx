import React from 'react';
import "./App.css";
const routes = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Products',
    path: '/products'
  },
  {
    label: 'Shop',
    path: '/shop'
  },
  {
    label: 'Contact',
    path: '/contact'
  },
];

const menuLinks = routes.map((route, index) => (
  <a className="mr-4 font-semibold" href={route.path} key={index}>{route.label}</a>
));

const NavBar = () => (
  <nav className="py-4 px-2 bg-gray-800 text-gray-100">
    <div className="container mx-auto flex space-x-12">
      <div className="font-bold uppercase text-lg">
        Brand
      </div>
      <div>
        {menuLinks}
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="bg-green-500 text-white py-4 lg:py-8">
    <div className="container mx-auto">
      <h1 className="text-2xl lg:text-4xl font-semibold lg:tracking-wider uppercase">Call to Action Header</h1>
      <h2 className="font-semibold tracking-wide text-lg lg:text-xl text-gray-200">sub-header/tag-line/slogan</h2>
    </div>
  </div>
);

const users = [
  {
    "id": 1,
    "name": "Paquito Goodlatt",
    "username": "pgoodlatt0",
    "email": "pgoodlatt0@addtoany.com",
    "avatar": "1",
    "job": "Physical Therapy Assistant",
    "city": "Shaozhai",
    "phrase": "Multi-tiered next generation capability"
  },
  {
    "id": 2,
    "name": "Zacharia Alpe",
    "username": "zalpe2",
    "email": "zalpe2@alexa.com",
    "avatar": "2",
    "job": "GIS Technical Architect",
    "city": "Nankou",
    "phrase": "Right-sized discrete policy"
  }
];

const cards = users.map((user, index) => (
  <div className="w-64 min-w-56 rounded shadow-lg mb-4 mr-4 bg-white" key={index}>
    <img className="w-full" src={user.avatar} alt={user.name} />
    <div className="px-4 py-4">
      <div className="font-bold text-gray-800 text-lg tracking-tight">{user.name}</div>
      <p className="font-semibold text-gray-700 text-sm">{user.job}</p>
      <p className="text-gray-600 text-xs">{user.email}</p>
      <hr className="mt-2"/>
      <p className="italic text-sm text-gray-700 mt-2">{user.phrase}</p>
    </div>
  </div>
));

const ButtonGroup = () => (
  <div className="flex space-x-4 mt-6">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Primary</button>
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded">Outline</button>
  </div>
);

const Content = () => (
  <div className="container mx-auto">
    <div className="flex flex-wrap">{cards}</div>
    <ButtonGroup/>
  </div>
);

function App() {
  <div>
    <header>
      <NavBar/>
      <Hero />
    </header>
    <main className="container mx-auto mt-4"><Content/></main>
  </div>
}

export default App;
