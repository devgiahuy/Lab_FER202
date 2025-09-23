"use client";
import React from "react";
import { Card, cn, type CardProps } from "@heroui/react";

export function CardStyled(props: CardProps) {
  return <Card {...props} className={cn("p-4 spcae-y-2", props.className)} />;
}
