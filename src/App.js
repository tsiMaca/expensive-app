import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import RoutesApp from './router/AppRouter';
import { startSetExpense } from "./components/actions/expenses";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startSetExpense());
  }, [dispatch]);
  return (
    <div className="App">
      <Header> </Header>
      <NavBar />
      <div>
        <RoutesApp />
      </div>
    </div>
  );
}

export default App;

