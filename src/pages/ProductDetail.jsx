import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return <h2>Chi tiết sản phẩm với ID: {id}</h2>;
}
