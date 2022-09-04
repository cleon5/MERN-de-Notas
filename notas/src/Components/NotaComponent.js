import React from "react";
import { Link, NavLink } from "react-router-dom";
import BtnEliminar from "../Components/BtnEliminar";
import BtnEditar from "./BtnEditar";

const NotaComponent = ({ Notas = [] }) => {
  Notas.map((nota)=>{
    let descripcion = nota.descripcion;
    const regex = /\n/gi;
    descripcion.replace(regex, " <br/> ")
    console.log(descripcion);
    nota.descripcion = descripcion
    
  })
  return (
    <div className="row  justify-content-center">
      {Notas.map((item, index) => (
        <div key={index} className="col p-2">
          <div className="card" style={{ width: "22rem" }}>
            <div className="card-body">
              <div className="card-title d-md-flex justify-content-between ">
                <h5 className=" ">{item.titulo}</h5>
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
