import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './containers/Landing'
import Product from './containers/Product';
import Cart from './containers/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/product/:id" component={Product}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
    </Router>

  );
}

export default App;
