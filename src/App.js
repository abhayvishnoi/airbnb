import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./components/data";
function App() {
  const cards = data.map((item) => <Card key={item.id} item={item} />);
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section>
        <div className="cards-list">{cards}</div>
      </section>
    </div>
  );
}

export default App;
