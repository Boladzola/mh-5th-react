import Counter from "./Counter";

// Компонент - функция, которая возвращает jsx разметку или null
function App() {
  return (
    <div className="App">
      <Counter />
      {/* <button className="gameButton">Начать игру</button> */}
    </div>
  );
}

export default App;
