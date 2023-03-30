import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./components/actions/auth";
import RoutesApp from "./router/AppRouter";
import "normalize.css/normalize.css";
import "../src/components/styles/styles.scss";
import { startSetExpense } from "./components/actions/expenses";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user.uid));
        dispatch(startSetExpense());
        if (window.location.pathname === "/") {
          window.location.href = "/dashboard";
          console.log("entro")
        }
      } else {
        navigate("/");
        dispatch(logout());
        console.log("logout")
      }
    });
  }, []);

  return (
    <div className="App">
      <div>
        <RoutesApp />
      </div>
    </div>
  );
}

export default App;
