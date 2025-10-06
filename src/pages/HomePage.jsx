import React from "react";
import { Link } from "react-router-dom";
import OrchidsCardList from "../components/share/OrchidCardList";

export default function HomePage() {
  return (
    <div>
      <h1 className=" mb-4 mt-5 text-center">🌸 Orchid Shop</h1>
      <OrchidsCardList />
    </div>
  );
}
