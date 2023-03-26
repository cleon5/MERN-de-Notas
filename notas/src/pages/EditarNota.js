import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { URL } from '../Constants/var';

const EditarNota = () => {
  let { id } = useParams();
  const [Nota, setNota] = useState([]);
  const url = URL + "/"+id;

  const axiosNota = (url) => {
    axios.get(url).then((data = data.data) => {
      setNota(data);
      console.log(data);
      setTitle(data.data.titulo);
      setDescripcion(data.data.descripcion);
      setType(data.data.tipo);
    });
  };
  useEffect(() => {
    axiosNota(url);
  }, []);

  const [title, setTitle] = useState(Nota.titulo);
  const [type, setType] = useState(Nota.tipo);
  const [descripcion, setDescripcion] = useState(Nota.descripcion);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeDescripcion = (event) => {
    setDescripcion(event.target.value);
  };
  const changeType = (event) => {
    setType(event.target.value);
  };

  const axiosPost = (url) => {
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const json = JSON.stringify({
      titulo: title,
      tipo: type,
      descripcion: descripcion,
    });

    try {
      axios.put(url, json, customConfig).then((response) => {
        console.log(response);
        regresar();
      });
    } catch (error) {
      console.log(error);
    }
  };
  const regresar = () => {
    <Link to={"/"}></Link>;
  };

  return (
    <div className="p-3">
      <div className="mb-3 ">
        <label className="form-label">Titulo de la Nota</label>
        <input
          type="text"
          value={title}
          onChange={changeTitle}
          className="form-control"
          placeholder="Titulo"
        />
      </div>
      <div className="mb-3 ">
        <label className="form-label">Tipo de Nota</label>
        <input
          type="text"
          value={type}
          onChange={changeType}
          className="form-control"
          placeholder="Tipo"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nota</label>
        <textarea
          value={descripcion}
          onChange={changeDescripcion}
          className="form-control"
          placeholder="...."
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div className="mb-3 justify-content-center">
        <Link to={"/"}>
           <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={axiosPost}
            >
            Guardar Nota
          </button>
        </Link>
       
        <Link to={"/"}>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={regresar}
          >
            Descartar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditarNota;
