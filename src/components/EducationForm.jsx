import React, { useState } from "react";

function EducationForm({ onSubmit, initialData = {} }) {
    const [educations, setEducations] = useState(initialData.length ? initialData : [
        { 
          school: '', 
          degree: '', 
          studyDate: '',
          location: ''
        }
      ]);
    
      const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newEducations = [...educations];
        newEducations[index] = { ...newEducations[index], [name]: value };
        setEducations(newEducations);
      };
    
      const addEducation = () => {
        setEducations([...educations, { 
          school: '', 
          degree: '', 
          studyDate: '',
          location: ''
        }]);
      };
    
      const removeEducation = (index) => {
        const newEducations = educations.filter((_, i) => i !== index);
        setEducations(newEducations);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(educations);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <h2>Education</h2>
          {educations.map((edu, index) => (
            <div key={index} className="education-entry">
              <input 
                type="text" 
                name="school" 
                placeholder="School Name" 
                value={edu.school} 
                onChange={(e) => handleChange(index, e)} 
                required 
              />
              <input 
                type="text" 
                name="degree" 
                placeholder="Degree/Major" 
                value={edu.degree} 
                onChange={(e) => handleChange(index, e)} 
                required 
              />
              <input 
                type="text" 
                name="studyDate" 
                placeholder="Graduation Date" 
                value={edu.studyDate} 
                onChange={(e) => handleChange(index, e)} 
                required 
              />
              <input 
                type="text" 
                name="location" 
                placeholder="Location" 
                value={edu.location} 
                onChange={(e) => handleChange(index, e)} 
              />
              {educations.length > 1 && (
                <button type="button" onClick={() => removeEducation(index)}>
                  Remove Education
                </button>
              )}
            </div>
          ))}
          <div className="form-actions">
            <button type="button" onClick={addEducation}>
              Add Another Education
            </button>
            <button type="submit">Save Education</button>
          </div>
        </form>
      );
}

export default EducationForm;