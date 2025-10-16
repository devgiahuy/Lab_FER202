import React from "react";
import { Link } from "react-router-dom";
import OrchidsCardList from "../components/share/OrchidCardList/index.js";
import { Icon } from "@iconify/react";
import DemoFormikForm from "../components/share/Demo/demoFormikForm.jsx";

export default function HomePage() {
  return (
    <>
      <OrchidsCardList />
    </>
  );
}
