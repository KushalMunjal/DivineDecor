import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    image: null
  });
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost/api/products/all');
        // Ensure that the response data is an array before setting it
        if (Array.isArray(response.data)) {
          setItems(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
        }
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

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('image', formData.image);

    try {
      const response = await axios.post('/api/products/add', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully:', response.data);
      // Ensure that items is an array before adding to it
      if (Array.isArray(items)) {
        setItems([...items, response.data]);
      } else {
        console.error('Items is not an array:', items);
      }
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  return (
    <div>
      <h1>To Upload Image on MongoDB</h1>
      <hr />
      <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
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
            <label htmlFor="cat">Category</label>
            <textarea
              id="category"
              name="category"
              value={formData.category}
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
            <label htmlFor="image">Upload Image</label>
            <input type="file" id="image" name="image" onChange={handleImageChange} required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <hr />

      <h1>Uploaded Images</h1>
      <div>
        {Array.isArray(items) && items.map((image, index) => (
          <div key={index}>
            <div>
              <img src={`data:image/${image.img.contentType};base64,${image.img.data}`} alt={image.name} />
              <div>
                <h5>{image.name}</h5>
                <p>{image.category}</p>
                <p>{image.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploadForm;
