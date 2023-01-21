
// import React, { useState } from 'react';
// import { Form, Input, Button, Select, message } from 'antd';
// import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
// import { isEmail } from 'validator';

// const { Option } = Select;

// const Contact = () => {
//   const [form] = Form.useForm();
//   const [formData, setFormData] = useState({});

//   const handleSubmit = (values) => {
//     if (!values.name) {
//       message.error('Name is required');
//       return;
//     }
//     if (!values.phone) {
//       message.error('Phone number is required');
//       return;
//     }
//     if (!values.email) {
//       message.error('Email is required');
//       return;
//     }
//     if (!isEmail(values.email)) {
//       message.error('Invalid email');
//       return;
//     }
//     if (!values.country) {
//       message.error('Country is required');
//       return;
//     }
//     if (!values.city) {
//       message.error('City is required');
//       return;
//     }
//     if (!values.address) {
//       message.error('Address is required');
//       return;
//     }
//     // Send data to the server
//     setFormData(values);
//     message.success('Form submitted successfully');
//   };

//   return (
//     <Form
//       form={form}
//       onFinish={handleSubmit}
//       layout="vertical"
//       style={{ padding: '2rem' }}
//     >
//       <Form.Item
//         name="name"
//         rules={[{ required: true, message: 'Please input your name!' }]}
//       >
//         <Input prefix={<UserOutlined />} placeholder="Name" />
//       </Form.Item>
//       <Form.Item
//         name="phone"
//         rules={[{ required: true, message: 'Please input your phone number!' }]}
//       >
//         <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
//       </Form.Item>
//       <Form.Item
//         name="email"
//         rules={[{ required: true, message: 'Please input your email!' }]}
//       >
//         <Input

