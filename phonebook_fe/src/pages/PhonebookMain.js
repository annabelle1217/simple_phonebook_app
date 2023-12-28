import React, { useEffect, useState } from "react";
import { Button, Table, Popconfirm, message } from "antd";
import axios from "axios";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const PhonebookMain = () => {
  const navigate = useNavigate();

  const [dataSource, setDataSource] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/phonebook-listing/"
      );
      setDataSource(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (record) => {
    axios
      .delete(
        `http://localhost:8000/api/phonebook-delete/${record.phonebook_id}`
      )
      .then((response) => {
        // Update the data source after successful deletion
        message.success("Deleted successfully!");
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => navigate(`/update/${record.phonebook_id}`)}
          />
          <Popconfirm
            title="Are you sure you want to delete this entry?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" icon={<DeleteOutlined />} />
          </Popconfirm>
        </span>
      ),
    },
  ];

  const handleCreate = () => {
    navigate("/create");
  };

  return (
    <Layout>
      <h3>Phonebook</h3>
      <Button type="primary" onClick={handleCreate}>
        Create
      </Button>
      <br />
      <br />

      <Table dataSource={dataSource} columns={columns} />
    </Layout>
  );
};

export default PhonebookMain;
