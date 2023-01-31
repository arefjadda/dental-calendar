import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";

function Navigation() {
  return (
    <nav>
      <h3>Dental Clinic Calendar</h3>
      <Link to="../help">
        <Icon type="question-circle" />
      </Link>
      <Link to="../about">About</Link>
      <Link to="../">Calendar</Link>
    </nav>
  );
}

export default Navigation;
