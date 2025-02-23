import React, { useState } from "react";

function GeneralInfoForm({ onSubmit, initialData = {} }) {
    const [formData, setFormData] = useState({
        name: initialData.name || '',
        email: initialData.email || '',
        phone: initialData.phone || '',
        summary: initialData.summary || ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <h2>Personal Information</h2>
          <input 
            type="text" 
            name="name" 
            placeholder="Full Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
          <textarea
            name="summary"
            placeholder="Professional Summary"
            value={formData.summary}
            onChange={handleChange}
            rows={4}
          />
          <button type="submit">Save Personal Info</button>
        </form>
      );
}

export default GeneralInfoForm;