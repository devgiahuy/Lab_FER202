import React from "react";
import OrchidsList from "../components/share/CardList";
import DarkOrWhite from "../components/share/DarkOrWhite";

export default function App() {
  return (
    <div>
      <div className="w-100 d-flex justify-content-end p-3">
        <DarkOrWhite />
      </div>

      <div className="w-100 mx-auto d-flex flex-column justify-content-center align-items-center">
        <OrchidsList />
      </div>
    </div>
  );
}
