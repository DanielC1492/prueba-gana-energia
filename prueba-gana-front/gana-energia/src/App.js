import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Containers/Login/Login';
import Home from './Containers/Home/Home';
import './App.css';
import CreateProduct from './Containers/CreateProduct/CreateProduct';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/createproduct' exact component={CreateProduct}></Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
