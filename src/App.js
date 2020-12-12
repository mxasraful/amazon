import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Products from './Components/Products/Products';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Banner />
            <Products />
          </Route>
          <Route exact path="/product/:catagories/:id">
            <ProductDetail />
          </Route>
          <Route path="*">
            ERROR
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
