import { Provider, useSelector } from "react-redux";
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import RoutesApp from './router/AppRouter';
import store from "./components/store/store";

function App() {

  return (
    <Provider store={store}>
      <div className="App">

        <Header> {console.log("store",store)} </Header>
        <NavBar/>
        <div>
          <RoutesApp/>      
        </div>
      </div>
    </Provider>
  );
}

export default App;
