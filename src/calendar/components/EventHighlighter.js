import React, { Component } from "react";
import moment from "moment";
import AddEventModal from "./AddEventModal";
import { generateWeekViewCoordinates } from "../utils";
import { eventHighlighter, specialHighlighter } from "../styles";

class EventHighlighter extends Component {
  state = {
    showEditEventModal: false,
    eventNewStart: null,
    eventNewEnd: null
  };

  /**
   * Deletes the event from the event list
   */
  deleteEvent = () => {
    this.props.onEventDelete(this.props.event.id);
    this.setState({
      showEditEventModal: false
    });
  };

  /**
   * Updates the event
   * @param {string} title - Updated title of the event
   * @param {string} gender - Updated gender of the event
   * @param {string} phone - Updated phone of the event
   * @param {string} email - Updated email of the event
   * @param {string} reason - Updated reason of the event
   * @param {boolean} special - Updated special status of the event
   */
  updateEvent = (title, gender, phone, email, reason, special) => {
    this.props.onEventUpdate(this.props.event.id, {
      title,
      gender,
      phone,
      email,
      reason,
      special,
      start: this.state.eventNewStart,
      end: this.state.eventNewEnd
    });
    this.setState({
      showEditEventModal: false
    });
    this.highlightStyler =
      special === true ? specialHighlighter : eventHighlighter;
  };

  /**
   * Open the edit event modal and initializes the start and end time
   */
  openEditEventModal = () => {
    this.setState({
      showEditEventModal: true,
      eventNewStart: this.props.event.start,
      eventNewEnd: this.props.event.end
    });
  };

  /**
   * Set the updated start and end times the state of the event being edited
   * @param {arr: moment, moment} - Array containing start and end date of the event
   */
  onCurrentEventTimeChange = (dates) => {
    this.setState({
      eventNewStart: +dates[0],
      eventNewEnd: +dates[1]
    });
  };

  /**
   * Closes modal and does nothing more!
   */
  closeModal = () => {
    this.setState({
      showEditEventModal: false
    });
  };

  highlightStyler =
    this.props.event.special === true ? specialHighlighter : eventHighlighter;

  render() {
    const { showEditEventModal, eventNewStart, eventNewEnd } = this.state;
    return (
      <React.Fragment>
        <AddEventModal
          editMode={true}
          eventTitle={this.props.event.title}
          eventGender={this.props.event.gender}
          eventPhone={this.props.event.phone}
          eventEmail={this.props.event.email}
          eventReason={this.props.event.reason}
          eventSpecial={this.props.event.special}
          visible={showEditEventModal}
          onCancel={this.deleteEvent}
          onClose={this.closeModal}
          onOk={this.updateEvent}
          eventStart={eventNewStart}
          eventEnd={eventNewEnd}
          onTimeChange={this.onCurrentEventTimeChange}
        />
        <div
          onClick={this.openEditEventModal}
          style={{
            ...generateWeekViewCoordinates(
              this.props.event,
              this.props.startDate
            ),
            ...this.highlightStyler
          }}
        >
          {this.props.event.title} <br />
          <span style={{ fontSize: 10 }}>
            {moment(this.props.event.start).format("hh:mm a")} -{" "}
            {moment(this.props.event.end).format("hh:mm a")}
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default EventHighlighter;
