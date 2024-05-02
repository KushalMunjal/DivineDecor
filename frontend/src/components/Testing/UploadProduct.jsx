  import React, { useState } from 'react';
  import axios from 'axios';

  const ProductUploadForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      category: '',
      price: '',
      imageData: null
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleimageDataChange = (e) => {
      setFormData({
        ...formData,
        imageData: e.target.files[0]
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('imageData', formData.imageData);
      try {
          const response = await axios.post('http://localhost:5000/api/products/add', formDataToSend, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log('Product uploaded successfully:', response.data);
          // Add any additional logic, such as displaying a success message or redirecting the user
        } catch (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Server responded with error status:', error.response.status);
            console.error('Error response data:', error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received from the server');
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', error.message);
          }
          // Handle errors, such as displaying an error message to the user
        }
        
    };

    return (
      <div>
        <h2>Upload Product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Product Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="image">Product imageData</label>
            <input type="file" id="image" name="image"  onChange={handleimageDataChange} required />
          </div>
          <button type="submit">Upload Product</button>
        </form>
      </div>
    );
  };

  export default ProductUploadForm;
