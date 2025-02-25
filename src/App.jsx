import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import OrderPage from "./components/OrderPage";
import "./App.css";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/orderPage">
          <OrderPage />
        </Route>
        <Route path="/success">
        <Success />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;