import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
