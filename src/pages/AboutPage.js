import React from "react";

const About = () => {
  return (
    <div className="aboutPage">
      <h2>The Best Dental Clinic Scheduling Software Ever</h2>
      <p>
        This dental booking app seeks to simplify scheduling and maximize the
        efficiency of booking a dental appointment for both patients and the
        clinic staff.
      </p>
      <p style={{ paddingBottom: 40 }}>
        In the current version of the software, only Administrators have access
        to the booking functions of the website. However, specialized patient
        portals are in the works and will be added to the software soon. This
        will enable patients to see available time slots and book an appointment
        online.
      </p>
    </div>
  );
};

export default About;
