import React from "react";
import { Input, DatePicker, Form } from "antd";
import moment from "moment";
import { inputStyles } from "../styles";

const { RangePicker } = DatePicker;

function AddEvent(props) {
  return (
    <React.Fragment>
      <Form layout={"horizontal"}>
        <Form.Item
          label="Full Name"
          style={inputStyles}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18, offset: 1 }}
          required
        >
          <Input
            type="text"
            placeholder="ex. John Doe"
            key="fullName"
            value={props.title}
            size="large"
            autoFocus={true}
            onChange={props.onTitleChange}
          />
        </Form.Item>
        <Form.Item
          label="Gender"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18, offset: 1 }}
          required
        >
          <Input
            type="text"
            placeholder="Female or Male"
            key="gender"
            value={props.gender}
            size="large"
            autoFocus={true}
            onChange={props.onGenderChange}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18, offset: 1 }}
          required
        >
          <Input
            type="email"
            placeholder="ex. some_email@example.com"
            key="email"
            value={props.email}
            size="large"
            autoFocus={true}
            onChange={props.onEmailChange}
          />
        </Form.Item>
        <Form.Item
          label="Phone"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18, offset: 1 }}
          required
        >
          <Input
            type="tel"
            placeholder="ex. 8085959999"
            key="phone"
            value={props.phone}
            size="large"
            autoFocus={true}
            onChange={props.onPhoneChange}
          />
        </Form.Item>
        <Form.Item
          label="Date"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18, offset: 1 }}
          required
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
            format="MMM D, YYYY h a"
          />
        </Form.Item>
      </Form>
    </React.Fragment>
  );
}

export default AddEvent;
