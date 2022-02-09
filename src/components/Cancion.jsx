import { Fragment } from "react";
import PropTypes from 'prop-types';

const Cancion = ({ letra }) => {

  /// permite que si no hay letra aun no muesta el componente
  if(letra.length === 0) return null;
  

  return (
    <Fragment>
      <h2>Letra Canción</h2>
      <div className="letra">{letra}</div>
    </Fragment>
  );
};

Cancion.propTypes = {
  letra: PropTypes.string.isRequired
}
export default Cancion;
