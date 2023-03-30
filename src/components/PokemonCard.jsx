import PropTypes from "prop-types";

const card= {
    width:"200px",
    padding: "1rem",
    backgroundColor: "lightsalmon",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px gray",
    color: "white",
    fontSize: "1.6rem",
    textAlign: "center",
    textShadow: "0px 0px 5px gray",
};

const img= {
    width:"200px",
};


function PokemonCard({pokemon}) {
    return (
        <figure style={card}>
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} style={img} alt={pokemon.name} /> : <p>???</p>}
        </figure>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  }

export default PokemonCard;