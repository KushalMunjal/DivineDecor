import React, { useState } from 'react';
import axios from 'axios';

const BookMurti = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    height: '',
    material: '',
    additionalRequirements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {  // Make the handleSubmit function asynchronous
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/BookMurti', formData);  // Corrected endpoint URL
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-md">
      <h1 className="text-3xl font-semibold mb-4">Book Murti</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="height" className="block text-sm font-medium text-gray-600">
              Height
            </label>
            <input
              type="text"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="material" className="block text-sm font-medium text-gray-600">
              Material (Pop or Mud)
            </label>
            <select
              id="material"
              name="material"
              value={formData.material}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="">Select Material</option>
              <option value="pop">Pop</option>
              <option value="mud">Mud</option>
            </select>
          </div>
          <div className="col-span-full mb-4">
            <label htmlFor="additionalRequirements" className="block text-sm font-medium text-gray-600">
              Additional Requirements
            </label>
            <textarea
              id="additionalRequirements"
              name="additionalRequirements"
              value={formData.additionalRequirements}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookMurti;
