import { Modal, Button, Row, Col } from "antd";
import React, { Component } from "react";
import AddEvent from "./AddEvent";

class AddEventModal extends Component {
  state = {
    title: "",
    gender: "",
    phone: "",
    email: "",
    reason: "",
    special: false
  };

  /**
   * To show the event auto fill and
   * re-initialize the event on adding new event
   */
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.eventTitle) {
      return {
        title: nextProps.eventTitle,
        gender: nextProps.eventGender,
        phone: nextProps.eventPhone,
        email: nextProps.eventEmail,
        reason: nextProps.eventReason,
        special: nextProps.eventSpecial
      };
    } else {
      return {
        title: "",
        gender: "",
        phone: "",
        email: "",
        reason: "",
        special: false
      };
    }
  }

  /**
   * Sets the name in the state
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
    this.setState({
      email: event.target.value
    });
  };

  /**
   * Sets the reason in the state
   * @param {event} event - JS/React event
   */
  handleReasonChange = (event) => {
    this.setState({
      reason: event.target.value
    });
  };

  /**
   * Sets the special status in the state
   * @param {event} event - JS/React event
   */
  handleSpecialChange = (event) => {
    this.setState({
      special: event.target.checked
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
      email: user.email,
      reason: user.reason,
      special: user.special
    });
  };

  /**
   * Updates the event
   */
  handleOk = () => {
    this.props.onOk({
      title: this.state.title,
      gender: this.state.gender,
      phone: this.state.phone,
      email: this.state.email,
      reason: this.state.reason,
      special: this.state.special
    });
  };

  render() {
    const { title, gender, phone, email, reason, special } = this.state;
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
              <Button
                key="back"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this appointment?"
                    )
                  ) {
                    this.props.onCancel();
                  }
                }}
              >
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
          reason={reason}
          special={special}
          onTitleChange={this.handleTitleChange}
          onGenderChange={this.handleGenderChange}
          onPhoneChange={this.handlePhoneChange}
          onEmailChange={this.handleEmailChange}
          onReasonChange={this.handleReasonChange}
          onSpecialChange={this.handleSpecialChange}
          start={this.props.eventStart}
          end={this.props.eventEnd}
          onTimeChange={this.props.onTimeChange}
        />
      </Modal>
    );
  }
}

export default AddEventModal;
