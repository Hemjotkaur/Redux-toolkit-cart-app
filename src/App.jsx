import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import { clearAllItems } from "./redux/slice";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <h1>React redux toolkit </h1>
      <button className="btn" onClick={()=>dispatch(clearAllItems())}>Clear Cart</button>
      <Product />
    </>
  );
}

export default App;