import { Row, Col, Button, Icon, Tooltip } from "antd";
import React from "react";
import {
  toolbar,
  toolbarDate,
  appTitle,
  alignRight,
  spacify,
  weekButtons
} from "../styles";
import moment from "moment";

function WeekToolbar(props) {
  const formattedDate = moment(props.startDate).format("MMM YYYY");
  return (
    <Row type="flex" gutter={4} style={toolbar}>
      <Col span={6} offset={3} style={toolbarDate}>
        <Icon type="calendar" style={spacify} />
        {} {formattedDate}
      </Col>

      <Col span={5} offset={3} style={appTitle}>
        Clinic Calendar
      </Col>

      <Col span={2} offset={3} style={alignRight}>
        <Tooltip placement="topLeft" title={moment().format("dddd, MMM D")}>
          <Button onClick={props.goToToday}>Today</Button>
        </Tooltip>
      </Col>
      <Col span={2} style={weekButtons}>
        <Button onClick={props.goToPreviousWeek} icon={"left"} />
        <Button onClick={props.goToNextWeek} icon={"right"} />
      </Col>
    </Row>
  );
}

export default WeekToolbar;
