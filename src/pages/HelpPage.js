import React from "react";

const Help = () => {
  return (
    <div>
      <h4>Steps to Book an Appointment</h4>
      <ol>
        <li>Press any empty spot on the calendar.</li>
        <li>Fill in the patient's info in the pop-up form.</li>
        <li>
          Choose a date and a time slot and click "Add Event" to add or "Cancel"
          to discard the appointment.
        </li>
      </ol>
      <h4>Steps to Update an Appointment</h4>
      <ol>
        <li>
          Locate the appointment by navigating through the weeks using the
          arrows on the top-left of the window.
        </li>
        <li>
          Click on the highlighted box of the appointment you are looking to
          change.
        </li>
        <li>Update the date and time and click "Update Even".</li>
      </ol>
      <h4>Steps to Remove an Appointment</h4>
      <ol>
        <li>
          Locate the appointment by navigating through the weeks using the
          arrows on the top-left of the window.
        </li>
        <li>
          Click on the highlighted box of the appointment you are looking to
          delete.
        </li>
        <li>
          Click on the "Delete" button at the bottom of the pop-up form to
          delete the appointment.
        </li>
      </ol>
    </div>
  );
};

export default Help;
