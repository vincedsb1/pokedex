import styles from '../PokemonCard2.module.css';


function PokemonCard2() {
  return (
    <figure className={styles.card}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        alt="squirtle"
        className={styles.cardImg}
      />
      <figcaption>squirtle</figcaption>
    </figure>
  );
}

export default PokemonCard2;