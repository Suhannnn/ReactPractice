import "./App.css";
import Greeting from "./Greeting";
import LoginControl from "./LoginControl";
import NumberList from "./NumberList.js";
import Clock from "./Clock";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li>{number}</li>);
  return (
    <div className="App">
      <div className="greeting">
        <Greeting isLoggedIn={false} />
        <LoginControl />
      </div>

      <div className="map">
        <ul>{listItems}</ul>
      </div>

      <div className="EmbeddingMap()JSX">
        <NumberList numbers={numbers} />
      </div>

      <div className="button">
        <button>Active</button>
      </div>

      <div className="clock">
        <Clock />
      </div>
    </div>
  );
}

export default App;
