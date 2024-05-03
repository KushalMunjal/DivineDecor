import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    price: '',
    imageUrl: '' // Add a new state for imageUrl
  });
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/all');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching images:', error.message);
      }
    };

    fetchImages();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload product details along with the image URL
      const { name, desc, price, imageUrl } = formData;
      const productData = { name, desc, price, imageUrl };
      const response = await axios.post('http://localhost:5000/api/products/add', productData);

      // Update state with the newly uploaded product
      setItems([...items, response.data]);

      // Clear form data
      setFormData({
        name: '',
        desc: '',
        price: '',
        imageUrl: '' // Reset imageUrl after submission
      });

      console.log('Product uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading product:', error.message);
    }
  };

  return (
    <div>
      <h1>To Upload Image on MongoDB</h1>
      <hr />
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Title</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="desc">Category</label>
            <textarea
              id="desc"
              name="desc"
              value={formData.desc}
              rows="2"
              placeholder="Category"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <textarea
              id="price"
              name="price"
              value={formData.price}
              rows="2"
              placeholder="Price"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              placeholder="Image URL"
              value={formData.imageUrl}
              name="imageUrl"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <hr />

      <h1>Uploaded Images</h1>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.imageUrl} alt={item.name} />
            <div>
              <h5>{item.name}</h5>
              <p>{item.desc}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploadForm;
