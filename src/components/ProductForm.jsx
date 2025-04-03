"use client";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

export default function ProductForm({ handleSubmit, loading, initialValues }) {
  return (
    <Form
      onFinish={handleSubmit}
      className="space-y-4"
      layout="vertical"
      size="large"
      initialValues={initialValues}
    >
      <Form.Item
        label="Product Title"
        name="title"
        colon={false}
        rules={[{ required: true, message: "Please input the product title!" }]}
      >
        <Input placeholder="Enter product title" />
      </Form.Item>

      <Form.Item
        label="Product Description"
        name="description"
        colon={false}
        rules={[
          {
            required: true,
            message: "Please input the product description!",
          },
        ]}
      >
        <TextArea rows={4} placeholder="Enter product description" />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        colon={false}
        rules={[{ required: true, message: "Please input the product price!" }]}
      >
        <Input type="number" placeholder="Enter product price" />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        colon={false}
        rules={[
          { required: true, message: "Please input the product category!" },
        ]}
      >
        <Input placeholder="Enter product category" />
      </Form.Item>

      <Form.Item
        label="Image URL"
        name="image"
        colon={false}
        rules={[
          {
            required: true,
            message: "Please input the product image URL!",
          },
        ]}
      >
        <Input placeholder="Enter product image URL" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={loading}
          style={{
            backgroundColor: "#4CAF50",
            borderColor: "#4CAF50",
            fontSize: "16px",
            padding: "12px 0",
            fontWeight: "bold",
          }}
          className="hover:bg-green-600 hover:border-green-600 transition duration-300"
        >
        { initialValues? "Update":"Create"} Product
        </Button>
      </Form.Item>
    </Form>
  );
}
