import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import Landing from './redux/containers/Landing/Landing'
import Product from './redux/containers/Product/Product';
import Cart from './redux/containers/Cart/Cart';
import Navbar from './redux/components/Navbar/Navbar';
import PageNotFound from './redux/components/PageNotFound/PageNotFound'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/product/:category/:id" component={Product}/>
          <Route exact path="/cart" component={Cart}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
