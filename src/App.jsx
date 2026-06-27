import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartList from "./CartList";
import Header from "./Header";
import Product from "./Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<CartList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
