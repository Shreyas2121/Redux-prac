import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./container/Header";
import ProductDetail from "./container/ProductDetail";
import ProductListing from "./container/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
