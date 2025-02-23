import React, { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import CVPreview from "./components/CVPreview";
import { generatePDF } from "./utils/pdfGenerator"; // Import the pdfGenerator

function CVBuilder() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isEditing, setIsEditing] = useState({
    general: true,
    education: true,
    work: true,
  });

  const handleGeneralSubmit = (data) => {
    setGeneralInfo(data);
    setIsEditing({ ...isEditing, general: false });
  };

  const handleEducationSubmit = (data) => {
    setEducation(data);
    setIsEditing({ ...isEditing, education: false });
  };

  const handleWorkSubmit = (data) => {
    setWorkExperience(data);
    setIsEditing({ ...isEditing, work: false });
  };

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  const handleEdit = (section) => {
    setIsEditing({ ...isEditing, [section]: true });
  };

  const generatePDFWrapper = () => {
    generatePDF(generalInfo, education, workExperience);
  };

  if (isPreviewMode) {
    return (
      <CVPreview
        generalInfo={generalInfo}
        education={education}
        workExperience={workExperience}
        togglePreviewMode={togglePreviewMode}
        generatePDF={generatePDFWrapper}
      />
    );
  }

  return (
    <div className="cv-builder">
      <h1>Resume Builder</h1>
      <button
        onClick={togglePreviewMode}
        disabled={!generalInfo || !education.length || !workExperience.length}
      >
        Preview Resume
      </button>

      {isEditing.general ? (
        <GeneralInfoForm
          onSubmit={handleGeneralSubmit}
          initialData={generalInfo || {}}
        />
      ) : (
        <div className="info-display">
          <h2>Personal Information</h2>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>
          <p>Summary: {generalInfo.summary}</p>
          <button onClick={() => handleEdit("general")}>Edit</button>
        </div>
      )}

      {isEditing.education ? (
        <EducationForm
          onSubmit={handleEducationSubmit}
          initialData={education}
        />
      ) : (
        <div className="info-display">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <p>School: {edu.school}</p>
              <p>Degree: {edu.degree}</p>
              <p>Study Dates: {edu.studyDate}</p>
            </div>
          ))}
          <button onClick={() => handleEdit("education")}>Edit</button>
        </div>
      )}

      {isEditing.work ? (
        <WorkExperienceForm
          onSubmit={handleWorkSubmit}
          initialData={workExperience}
        />
      ) : (
        <div className="info-display">
          <h2>Work Experience</h2>
          {workExperience.map((work, index) => (
            <div key={index}>
              <p>Company: {work.company}</p>
              <p>Position: {work.position}</p>
              <p>Responsibilities: {work.responsibilities}</p>
              <p>Work Dates: {work.workDates}</p>
            </div>
          ))}
          <button onClick={() => handleEdit("work")}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default CVBuilder;