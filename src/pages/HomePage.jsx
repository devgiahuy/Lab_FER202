import React from "react";
import { Link } from "react-router-dom";
import OrchidsCardList from "../components/share/OrchidCardList";
import { Icon } from "@iconify/react";

export default function HomePage() {
  return (
    <div>
      <h1 className=" mb-4 mt-5 text-center">🌸 Orchid Shop</h1>
      <OrchidsCardList />
      <div className="flex items-center gap-2">
        <Icon
          icon="mdi:airbag"
          width="28"
          height="28"
          className="text-gray-700"
        />
        <span className="text-sm font-medium">Airbag</span>
      </div>
    </div>
  );
}
