import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import CreateRecipe from "./Components/CreateRecipe";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/recipes/:id" component={Detail} />
          <Route exact path="/create" component={CreateRecipe} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
