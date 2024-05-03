import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    price: '',
    image: null
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
    formDataToSend.append('desc', formData.desc);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:5000/api/products/add', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully:', response.data);
      setItems([...items, response.data]);
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
      {Array.isArray(items) && items.map((image, index) => {
  console.log('Image data:', {
    type: image.img.contentType,
    data: arrayBufferToBase64(image.img.data)
  });
  
  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
  
  return (
    <div key={index}>
      <div>
        <img src={`data:image/${image.img.contentType};base64,${arrayBufferToBase64(image.img.data)}`} alt={image.name} />
        <div>
          <h5>{image.name}</h5>
          <p>{image.category}</p>
          <p>{image.price}</p>
        </div>
      </div>
    </div>
  );
})}


      </div>
    </div>
  );
};

export default ImageUploadForm;
