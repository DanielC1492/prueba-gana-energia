import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Containers/Login/Login';
import Home from './Containers/Home/Home';
import './App.css';
import CreateProduct from './Containers/CreateProduct/CreateProduct';
import ShowProducts from './Containers/ShowProducts/ShowProducts';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/createproduct' exact component={CreateProduct}></Route>
        <Route path='/showproducts' exact component={ShowProducts}></Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
