import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import Cancion from "./components/Cancion";
import Info from "./components/Info";

function App() {
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('')
  const [informacion, setInformacion] = useState({})

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    const actualizarAPI = async () => {
      const { artista, cancion } = busquedaLetra;

      const url_letra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url_artista = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista}`

      const [letra, informacion] = await Promise.all([
        axios.get(url_letra),
        axios.get(url_artista)
      ])
      setLetra(letra.data.lyrics);
      setInformacion(informacion.data.artists[0]);
    };

    actualizarAPI();
  }, [busquedaLetra, informacion]);

  return (
    <div className="App">
      <Formulario setBusquedaLetra={setBusquedaLetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info informacion={informacion}/>
          </div>
          <div className="col-md-6">
            <Cancion letra={letra}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
