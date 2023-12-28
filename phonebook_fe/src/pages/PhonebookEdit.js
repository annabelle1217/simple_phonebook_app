import React, { useEffect, useState } from "react";
import { Form, Input, Button, Row, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { RollbackOutlined } from "@ant-design/icons";
import axios from "axios";

const PhonebookEdit = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { id } = useParams(); // Get the route ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/phonebook/${id}/`
        );
        form.setFieldsValue(response.data.data);
      } catch (error) {
        message.error("Error fetching data");
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const onFinish = async (values) => {
    if (!id) {
      // create
      try {
        const response = await axios.post(
          "http://localhost:8000/api/phonebook-create/",
          values
        );
        message.success("Data saved successfully!");
        navigate("/listing");
      } catch (error) {
        message.error("Error saving data");
      }
    } else {
      //update
      try {
        const response = await axios.put(
          `http://localhost:8000/api/phonebook-edit/${id}/`,
          values
        );
        message.success("Data saved successfully!");
        navigate("/listing");
      } catch (error) {
        message.error("Error saving data");
      }
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <Row justify="space-between">
        <h3 style={{ margin: 5 }}>{id ? "Edit Entry" : "Create New Entry"}</h3>
        <Button onClick={handleBack}>Back</Button>
      </Row>

      <Form form={form} onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[{ required: true, message: "Please enter a phone number" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ float: "right" }}>
            {id ? "Update" : "Create"}
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default PhonebookEdit;
