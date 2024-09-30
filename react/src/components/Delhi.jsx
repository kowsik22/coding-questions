import React from "react";
import { useState } from "react";
import { useData } from "../context/ExampleContext";
export default function Delhi({ gift }) {
  let { gift } = useData();
  return (
    <div>
      <h2>{gift}</h2>
    </div>
  );
}
