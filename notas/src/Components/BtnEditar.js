import React from "react";
import { Link } from "react-router-dom";

const BtnEditar = (id) => {
  return (
    <Link to={`/Editar/${id.id}`}>
      <button className="btn btn-primary m-1">
        Editar
        </button>
    </Link>
  );
};

export default BtnEditar;
