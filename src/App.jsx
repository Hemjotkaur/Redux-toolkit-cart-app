import { useDispatch } from 'react-redux'
import './App.css'
import Header from './Header'
import Product from './Product'
import { clearAllItems } from './redux/slice';
function App() {
const dispatch=useDispatch();
  return (
    <>
 <Header />
     <h1>React redux toolkit tutorials</h1>
     <button onClick={()=>dispatch(clearAllItems())} className='btn'>Clear Cart</button>
 <Product />
    </>
  )
}

export default App
