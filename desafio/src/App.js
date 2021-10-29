
import './App.css';
import "./styles/Global.scss"

import { MenuLateral } from './components/menu-lateral';
import { Clients } from './pages/Clientes';
import Graphic from './pages/graphics';
import { Header } from './components/Header';

import { Provider } from "react-redux"
import { combineReducers, createStore } from "redux"
import { Route, BrowserRouter, Switch } from "react-router-dom"

import ParseMenu from './reducers/menuBar';
import dataClient from './reducers/ReducerCrud';
import menuLateral from "./reducers/menuLateralReducer"





function App() {

  const allReducers = combineReducers({
    menuLateral: menuLateral,
    menuBar: ParseMenu,
    Clients : dataClient
  })

  const store = createStore(allReducers)
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/produção-do-dia">
              <Graphic/>
            </Route>
            <Route path="/produção-do-dia">
              <Graphic></Graphic>
            </Route>
            <Route path="/Clients">
              <Clients/>
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
