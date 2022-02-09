import React, { useState } from "react";
import PropTypes from 'prop-types';

const Formulario = ({setBusquedaLetra}) => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const [error, setError] = useState(false)
  const {artista, cancion} = busqueda

  const actualizarState = e => {
      setBusqueda({
          ...busqueda,
          [e.target.name]: e.target.value
      })
  }

  const buscarInformacion = e => {
      e.preventDefault();

      if(artista.trim() === '' || cancion.trim() === ''){
        setError(true);
        return;
      }

      setError(false);

      setBusquedaLetra(busqueda);

      // Resetear el formulario
      setBusqueda({
          artista: '',
          cancion: ''
      })
  }

  return (
    <div className="bg-info">
      <div className="container">
        {
            error 
            ? <p className="alert alert-danger text-center p-2">Todos los campos son Obligatorios</p> 
            :null
        }
        <div className="row">
          <form
            action=""
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={buscarInformacion}
            autoComplete="false"
          >
            <fieldset>
              <legend className="text-center">Buscador Letras canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Artista">Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Artista">Cancion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Cancion"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  setBusquedaLetra: PropTypes.func.isRequired
}

export default Formulario;
