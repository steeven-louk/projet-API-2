import React from "react";
import './styles/description.scss'

export default function Description({data}) {
  
  return (
    <div>
      <p className="description">
        {data}
      </p>
    </div>
  );
}
