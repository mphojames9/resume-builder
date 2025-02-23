import { jsPDF } from "jspdf";

export function generatePDF(generalInfo, education, workExperience) {
  const doc = new jsPDF();
  let yOffset = 20;
  const margin = 20; 

  const addSectionTitle = (title) => {
    doc.setFontSize(16);
    doc.text(title, margin, yOffset);
    yOffset += 10;
  };


  const addKeyValuePair = (key, value) => {
    doc.setFontSize(12);
    doc.text(`${key}: ${value || "N/A"}`, margin, yOffset);
    yOffset += 7;
  };

  doc.setFontSize(18);
  doc.text(`${generalInfo.name || "Resume"}`, margin, yOffset);
  yOffset += 12;

  addKeyValuePair("Email", generalInfo.email);
  addKeyValuePair("Phone", generalInfo.phone);
  addKeyValuePair("Summary", generalInfo.summary);
  yOffset += 10;

  // Education
  addSectionTitle("Education");
  education.forEach((edu) => {
    addKeyValuePair("School", edu.school);
    addKeyValuePair("Degree", edu.degree);
    addKeyValuePair("Study Dates", edu.studyDate);
    yOffset += 8; 
  });

  if (education.length === 0) {
    doc.setFontSize(12);
    doc.text("No education information provided.", margin, yOffset);
    yOffset += 7;
  }

  yOffset += 5; 

  // Work Experience
  addSectionTitle("Work Experience");
  workExperience.forEach((work) => {
    addKeyValuePair("Company", work.company);
    addKeyValuePair("Position", work.position);
    addKeyValuePair("Responsibilities", work.responsibilities);
    addKeyValuePair("Work Dates", work.workDates);
    yOffset += 8; 
  });

  if (workExperience.length === 0) {
    doc.setFontSize(12);
    doc.text("No work experience information provided.", margin, yOffset);
    yOffset += 7;
  }

  doc.save(`${generalInfo.name || "resume"}_resume.pdf`);
}