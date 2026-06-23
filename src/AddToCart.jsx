import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const AddToCart = () => {
  const selector = useSelector((state) => state.cart.value)
    return (
        <div className="cart">
            <Link to="/cart" >
            <img src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png" className="cart-icon" alt="Cart" />
            <span className="cart-count">{selector}</span></Link>
        </div>
    )
}

export default AddToCart