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


function PokemonCard(props) {
    let pokemon = props.pokemon;
    return (
        <figure style={card}>
            {pokemon.imgSrc === undefined || null ? <p>???</p> : <img src={pokemon.imgSrc} style={img}></img>}
        </figure>
    )
}

// function PokemonCard() {
//     let pokemon = pokemonList[1];
//     let pokemonCheckSrc = pokemon.imgSrc !== "" ? "<p>..." : pokemon.imgSrc;
//     return (
//         <figure style={card}>
//             <img 
//                 src={pokemon.imgSrc !== "" ? "<p>..." : pokemon.imgSrc}
//                 alt={pokemon.name}
//                 style={{
//                     width: "100%",
//                     height: "auto",
//                     marginBottom: "0.5rem",
//                     bacgroundColor: "white",
//                     borderRadius: "inherit",
//                     boxShadow: "inherit",
//                 }}
//                 />
//         <figcaption>Charmander</figcaption>
//         </figure>
//     );
// }


export default PokemonCard;