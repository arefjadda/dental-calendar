import { Modal, Button } from "antd";
import React, { Component } from "react";
import AddEvent from "./AddEvent";

class AddEventModal extends Component {
  state = {
    title: "",
    phone: ""
  };

  /**
   * To show the title auto fill and
   * re-initialize the title on adding new event
   */
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.eventTitle) {
      return {
        title: nextProps.eventTitle
      };
    } else {
      return {
        title: ""
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

  handlePhoneChange = (event) => {
    console.log(event.target.value);
    this.setState({
      phone: event.target.value
    });
  };

  /**
   * Updates the event
   */
  handleOk = () => {
    this.props.onOk(this.state.title, this.state.phone);
  };

  render() {
    const { title } = this.state;
    return (
      <Modal
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.props.onClose}
        footer={[
          <Button key="back" onClick={this.props.onCancel}>
            {this.props.editMode ? "Delete" : "Cancel"}
          </Button>,
          <Button key="submit" type="primary" onClick={this.handleOk}>
            {this.props.editMode ? "Update Event" : "Add Event"}
          </Button>
        ]}
      >
        <AddEvent
          title={title}
          onTitleChange={this.handleTitleChange}
          onPhoneChange={this.handlePhoneChange}
          start={this.props.eventStart}
          end={this.props.eventEnd}
          onTimeChange={this.props.onTimeChange}
        />
      </Modal>
    );
  }
}

export default AddEventModal;
