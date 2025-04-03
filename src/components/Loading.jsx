import { Spin } from "antd";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Spin size="large" tip="Loading product details..." />
    </div>
  );
}
