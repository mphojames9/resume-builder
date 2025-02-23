import React from "react";

function CVPreview({ generalInfo, education, workExperience, togglePreviewMode, generatePDF }) {
  return (
    <div className="cv-preview">
      <button onClick={togglePreviewMode}>Back to Edit</button>
      <button onClick={generatePDF}>Download PDF</button>
      <div className="preview-content">
        <h1>{generalInfo.name}</h1>
        <p>{generalInfo.email} | {generalInfo.phone}</p>
        <p>{generalInfo.summary}</p>

        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.school}</h3>
            <p>{edu.degree} - {edu.studyDate}</p>
          </div>
        ))}

        <h2>Work Experience</h2>
        {workExperience.map((work, index) => (
          <div key={index}>
            <h3>{work.company}</h3>
            <p>{work.position} | {work.workDates}</p>
            <p>{work.responsibilities}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVPreview;