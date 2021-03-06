import PropTypes from 'prop-types';

const Info = ({ informacion }) => {
  if (Object.keys(informacion).length === 0) return null;

  const { strArtistThumb, strGenre, strBiographyES } = informacion;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        informacion Artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artista" />
        <p className="card-text">Género: {strGenre}</p>
        <h2 className="card-text">Biografía: </h2>
        <p className="card-text">{strBiographyES}</p>
        <div className="card-text">
          <a
            href={`https://${informacion.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${informacion.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${informacion.strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
    informacion: PropTypes.object.isRequired
}

export default Info;
