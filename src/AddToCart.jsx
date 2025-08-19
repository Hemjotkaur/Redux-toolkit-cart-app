import { useSelector } from "react-redux"

const AddToCart = () => {
    const selector = useSelector((state)=>state.cart.value);
    console.log(selector);
    
    return (
        <div className="cart">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png" className="cart-icon" alt="Cart" />
            <span className="cart-count">{selector}</span>
        </div>
    )
}

export default AddToCart