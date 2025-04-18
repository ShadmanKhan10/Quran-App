import React from "react";
import { useParams } from "react-router-dom";

export default function PerticularHistory() {
  const { perticularHistory } = useParams();
  return <div>{perticularHistory}</div>;
}
