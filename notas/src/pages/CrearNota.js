import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";

const CrearNota = () => {
  
  const [title, setTitle]= useState('')
  const [type, setType]= useState('')
  const [descripcion, setDescripcion]= useState('')
  
  const changeTitle = event => {
    setTitle(event.target.value)
  }
  const changeDescripcion = event => {
    setDescripcion(event.target.value)
  }
  const changeType = event => {
    setType(event.target.value)
  }

  const axiosPost = () => {
    const url = "http://localhost:4000/post/";
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const json = JSON.stringify({
      titulo: title,
      descripcion: descripcion,
      tipo: type,
    });

    try {
      axios.post(url, json, customConfig)
      .then((response) => {
        console.log(response);
        
      })
    } catch (error) {
         console.log(error);
    }
    const regresar = () => {
      <Link to={"/"}></Link>;
    };
    regresar()
  };
  const regresar = () => {
    <Link to={"/"}></Link>;
  };

  return (
    <div className="p-3">
       <form >
      <div className="mb-3 ">
        <label className="form-label">Titulo de la Nota</label>
        <input onChange={changeTitle} value={title}
          type="text" className="form-control" placeholder="Titulo" />
      </div>
      <div className="mb-3 ">
        <label className="form-label">Tipo de Nota</label>
        <input onChange={changeType} value={type}
        type="text" className="form-control" placeholder="Tipo" />
      </div>
      <div className="mb-3">
        <label className="form-label">Nota</label>
        <textarea onChange={changeDescripcion} value={descripcion}
          className="form-control"
          placeholder="...."
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div className="mb-3 justify-content-center">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={axiosPost}
          >
            Guardar Nota
          </button>
        
        <Link to={"/"}>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
          >
            Descartar
          </button>
        </Link>
      </div>
      </form>
    </div>
  );
};

export default CrearNota;