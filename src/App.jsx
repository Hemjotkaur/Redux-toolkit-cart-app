import './App.css'
import Header from './Header'
import Product from './Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
<BrowserRouter>
 <Header />

 <Routes>
<Route path="/" element={ <Product />}></Route>

 </Routes>
</BrowserRouter>
    </>
  )
}

export default App
