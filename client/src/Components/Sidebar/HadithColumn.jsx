import React from "react";
import { useNavigate } from "react-router-dom";

export default function HadithColumn({ columnData }) {
  const navigate = useNavigate();
  return (
    <div className="column">
      {columnData.map((column) => (
        <p
          key={column.location}
          className="column-contents"
          onClick={() => navigate(column.location)}
        >
          {column.name}
        </p>
      ))}
    </div>
  );
}
