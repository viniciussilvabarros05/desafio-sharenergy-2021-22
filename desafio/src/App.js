
import './App.css';
import "./styles/Global.scss"

import { MenuLateral } from './components/menu-lateral';
import { Clients } from './pages/Clientes';
import Graphic from './pages/graphics';
import { Header } from './components/Header';

import { Provider } from "react-redux"
import { combineReducers, createStore, applyMiddleware } from "redux"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import thunk from "react-thunk"

import ParseMenu from './reducers/menuBar';
import dataClient from './reducers/ReducerCrud';
import menuLateral from "./reducers/menuLateralReducer"
import Percentage from "./reducers/TotalCash"
import admin from './reducers/UserAdmin';
import { PrivateRouter } from './components/PrivateRouter';
import { Login } from './pages/Login';




function App() {

  const allReducers = combineReducers({
    menuLateral: menuLateral,
    menuBar: ParseMenu,
    Clients: dataClient,
    Potencia: Percentage,
    Admin: admin

  }, applyMiddleware(thunk))

  const store = createStore(allReducers)
  return (
    <div className="App">
      <Provider store={store}>

        <BrowserRouter>

          <Header></Header>

          <Switch>

            <Route path="/produção-do-dia">
              <Graphic />
            </Route>


            <PrivateRouter path="/Clients">
            
                <Clients />
          
            </PrivateRouter>
            
            <Route path = "/Login">
              <Login></Login>
            </Route>

            <Route path="*">
              <Graphic></Graphic>
            </Route>

          </Switch>

          <MenuLateral></MenuLateral>

        </BrowserRouter>

      </Provider>
    </div >
  );
}

export default App;
