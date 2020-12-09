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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/topics">

          </Route>
          <Route exact path="/">
            <Header />
            <Banner />
            <Products />
          </Route>
          <Route exact path="/product/:catagories/:id">
            <Header />
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
