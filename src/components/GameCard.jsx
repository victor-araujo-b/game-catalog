function GameCard({name, genre, rating}) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{genre}</p>
      <p>{rating}</p>
      <button>Ver Jogo</button>
    </article>
  )
}

export default GameCard;