"use client";
import React from "react";
import { Layout } from "antd";
import Link from "next/link";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            marginRight: "auto",
          }}
        >
          <Link href={"/"} style={{ color: "white" }}>
            AQTAR
          </Link>
        </div>
        <Link href={"/new-product"} className="font-bold text-xl text-white" >
          Create new product
        </Link>
      </Header>
    </Layout>
  );
};

export default Navbar;
