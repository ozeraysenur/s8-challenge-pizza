import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import OrderPage from "./components/OrderPage";
import "./App.css";

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
      </Switch>
    </Router>
  );
}

export default App;