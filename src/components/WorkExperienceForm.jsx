import React, { useState } from "react";

function WorkExperienceForm({ onSubmit, initialData = {} }) {
    const [workExperiences, setWorkExperiences] = useState(initialData.length ? initialData : [
        { 
          company: '', 
          position: '', 
          responsibilities: '',
          workDates: '',
          location: ''
        }
      ]);
    
      const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newWorkExperiences = [...workExperiences];
        newWorkExperiences[index] = { ...newWorkExperiences[index], [name]: value };
        setWorkExperiences(newWorkExperiences);
      };
    
      const addWorkExperience = () => {
        setWorkExperiences([...workExperiences, { 
          company: '', 
          position: '', 
          responsibilities: '',
          workDates: '',
          location: ''
        }]);
      };
    
      const removeWorkExperience = (index) => {
        const newWorkExperiences = workExperiences.filter((_, i) => i !== index);
        setWorkExperiences(newWorkExperiences);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(workExperiences);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <h2>Work Experience</h2>
          {workExperiences.map((work, index) => (
            <div key={index} className="work-entry">
              <input 
                type="text" 
                name="company" 
                placeholder="Company Name" 
                value={work.company} 
                onChange={(e) => handleChange(index, e)} 
                required 
              />
              <input 
                type="text" 
                name="position" 
                placeholder="Job Title" 
                value={work.position} 
                onChange={(e) => handleChange(index, e)} 
                required 
              />
              <textarea 
                name="responsibilities" 
                placeholder="Key Responsibilities & Achievements" 
                value={work.responsibilities} 
                onChange={(e) => handleChange(index, e)} 
                rows={4}
                required 
              />
              <input 
                type="text" 
                name="workDates" 
                placeholder="Employment Dates" 
                value={work.workDates} 
                onChange={(e) => handleChange(index, e)} 
                required 
              />
              <input 
                type="text" 
                name="location" 
                placeholder="Location" 
                value={work.location} 
                onChange={(e) => handleChange(index, e)} 
              />
              {workExperiences.length > 1 && (
                <button type="button" onClick={() => removeWorkExperience(index)}>
                  Remove Work Experience
                </button>
              )}
            </div>
          ))}
          <div className="form-actions">
            <button type="button" onClick={addWorkExperience}>
              Add Another Job
            </button>
            <button type="submit">Save Work Experience</button>
          </div>
        </form>
      );
}

export default WorkExperienceForm;