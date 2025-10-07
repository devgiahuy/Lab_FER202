import React from "react";
import { ListOfOrchids } from "../data/ListOfOrchids";
import OrchidCard from "../components/styled/OrchidCard";
import OrchidsCardList from "../components/share/OrchidCardList";
import "bootstrap/dist/css/bootstrap.min.css";
import NaturalCardList from "../components/share/NaturalCardList";

export default function NaturalPage() {
  return (
    <>
      <NaturalCardList />
    </>
  );
}
