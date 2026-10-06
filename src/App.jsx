import Header from "./components/Header";
import GameCard from "./components/GameCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Jogos</h2>
        <GameCard
          name="Shin Megami Tensei V"
          genre="JRPG"
          rating={84}
        />

        <GameCard
          name="Persona 5 Royal"
          genre="JRPG"
          rating={95}
        />

        <GameCard
          name="Shin Megami Tensei IV"
          genre="JRPG"
          rating={83}
        />
      </main>
    </>
  )
}

export default App;