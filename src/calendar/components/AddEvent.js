import React from "react";
import { Input, DatePicker, Form } from "antd";
import moment from "moment";
import { inputStyles } from "../styles";

const { RangePicker } = DatePicker;

function AddEvent(props) {
  return (
    <React.Fragment>
      <Form>
        <Form.Item
          name="title"
          label="Full Name"
          style={inputStyles}
          rules={[
            { required: true, message: "Please input the patient's full name." }
          ]}
        >
          <Input
            type="text"
            placeholder="ex. John Doe"
            value={props.title}
            size="large"
            autoFocus={true}
            onChange={props.onTitleChange}
          />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number." }
          ]}
        >
          <Input
            type="text"
            placeholder="ex. 8085959999"
            defaultValue={props.phone}
            autoFocus={true}
            onChange={props.onPhoneChange}
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="reason"
          label="Reason for Visit"
          rules={[
            {
              required: true,
              message: "Please input the patient's reason for visiting."
            }
          ]}
        >
          <Input.TextArea size="large" showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={[
            { required: true, message: "Please input your phone number." }
          ]}
        >
          <RangePicker
            style={{ width: "100%" }}
            value={[moment(props.start), moment(props.end)]}
            onChange={props.onTimeChange}
            size="large"
            showTime={{
              format: "HH",
              hourStep: 1,
              defaultValue: [moment(props.start), moment(props.end)]
            }}
            format="MMM Do, YYYY hh a"
          />
        </Form.Item>
      </Form>
    </React.Fragment>
  );
}

export default AddEvent;
