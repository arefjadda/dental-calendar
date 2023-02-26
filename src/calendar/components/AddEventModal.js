import { Modal, Button, Row, Col } from "antd";
import React, { Component } from "react";
import AddEvent from "./AddEvent";

class AddEventModal extends Component {
  state = {
    title: "",
    gender: "",
    phone: "",
    email: ""
  };

  /**
   * To show the title auto fill and
   * re-initialize the title on adding new event
   */
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.eventTitle) {
      return {
        title: nextProps.eventTitle,
        gender: nextProps.eventGender,
        phone: nextProps.eventPhone,
        email: nextProps.eventEmail
      };
    } else {
      return {
        title: "",
        gender: "",
        phone: "",
        email: ""
      };
    }
  }

  /**
   * Sets the title in the state
   * @param {event} event - JS/React event
   */
  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  };

  /**
   * Sets the gender in the state
   * @param {event} event - JS/React event
   */
  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value
    });
  };

  /**
   * Sets the phone in the state
   * @param {event} event - JS/React event
   */
  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value
    });
  };

  /**
   * Sets the email in the state
   * @param {event} event - JS/React event
   */
  handleEmailChange = (event) => {
    console.log(event.target.value);
    this.setState({
      email: event.target.value
    });
  };

  generateUser = async () => {
    const response = await fetch("/generate-user");
    const user = await response.json();
    console.log(user);
    this.setState({
      title: user.fullName,
      gender: user.gender,
      phone: user.phone,
      email: user.email
    });
  };

  /**
   * Updates the event
   */
  handleOk = () => {
    this.props.onOk(
      this.state.title,
      this.state.gender,
      this.state.phone,
      this.state.email
    );
  };

  render() {
    const { title, gender, phone, email } = this.state;
    return (
      <Modal
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.props.onClose}
        footer={[
          <Row key="buttons">
            <Col span={12} style={{ textAlign: "left" }}>
              <Button
                key="generate"
                type="dashed"
                style={{ color: "blue" }}
                onClick={this.generateUser}
              >
                {this.props.editMode
                  ? "Regenerate Sample Patient"
                  : "Generate Sample Patient"}
              </Button>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Button key="back" onClick={this.props.onCancel}>
                {this.props.editMode ? "Delete" : "Cancel"}
              </Button>

              <Button key="submit" type="primary" onClick={this.handleOk}>
                {this.props.editMode ? "Update Event" : "Add Event"}
              </Button>
            </Col>
          </Row>
        ]}
      >
        <AddEvent
          title={title}
          gender={gender}
          phone={phone}
          email={email}
          onTitleChange={this.handleTitleChange}
          onGenderChange={this.handleGenderChange}
          onPhoneChange={this.handlePhoneChange}
          onEmailChange={this.handleEmailChange}
          start={this.props.eventStart}
          end={this.props.eventEnd}
          onTimeChange={this.props.onTimeChange}
        />
      </Modal>
    );
  }
}

export default AddEventModal;
