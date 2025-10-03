import React from "react";
import { Link } from "react-router-dom";
import OrchidsList from "../components/share/CardList";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <OrchidsList />
      <Link to="detail/1">Xem sản phẩm 1</Link>
    </div>
  );
}
