import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import NotaComponent from "../Components/NotaComponent";


const Home = ()=> {
    const [Notas, setNotas] = useState([]);
    const url = "http://localhost:4000/post/";
    const axiosNotas = (url) => {
      axios.get(url).then((data) => {

        
        setNotas(data.data);
      });
    };
    useEffect(() => {
      axiosNotas(url);
    }, []);
    return (
      <div className="App">
        <div className="container mt-5  ">
          <div className="">
            <Link className="p-2" to={"/CrearNota"}>
              <button className="btn btn-warning ">Crear</button>
            </Link>
          </div>
          <NotaComponent Notas={Notas} />
        </div>
      </div>
    );
  }

export default Home