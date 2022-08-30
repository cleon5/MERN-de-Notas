import React from 'react'
import axios from 'axios';

const BtnEliminar = (id) => {
    console.log(id.id)
    const url = "http://localhost:4000/post/"+id.id;
    const axiosDelete = () => {
        const customConfig = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
            axios.delete(url)
          .then((response) => {
            console.log(response);
            window.location.reload()
          })
        } catch (error) {
             console.log(error);
        }
      };
  return (
        <button className='btn btn-danger m-1' onClick={axiosDelete}>
            Eliminar
        </button>
  )
}

export default BtnEliminar