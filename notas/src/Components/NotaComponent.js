import React from "react";
import { Link } from "react-router-dom";
import BtnEliminar from "../Components/BtnEliminar";
import BtnEditar from "./BtnEditar";

const NotaComponent = ({ Notas = [] }) => {
  return (
    <div className="row">
      {Notas.map((item, index) => (
        <div key={index} className="col">
          
            <div className="card" style={{ width: "22rem" }}>
              <div className="card-body" >
                <div className="card-title d-md-flex justify-content-between ">
                  <h5 className=" ">
                    {item.titulo}
                  </h5>
                  <div>
                    <BtnEditar id={item._id} />
                    <BtnEliminar id={item._id} />
                  </div>
                  
                </div>

                <p className="card-text">Tipo: {item.tipo}</p>
                <p className="card-text">{item.descripcion}</p>
              </div>
            </div>
        
        </div>
      ))}
    </div>
  );
};

export default NotaComponent;
