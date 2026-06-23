import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  const selector = useSelector((state)=>state.products)
  console.log(selector);
  return (
    <div className="product-card">
      <div className="product-image h-[330px]">
        <img
          className="h-full w-full object-contain"
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Wireless Headphones"
        />
      </div>

      <div className="product-info">
        <h1>Wireless Headphones</h1>

        <p className="price">$129.99</p>

        <p className="description">
          Experience high-quality sound with these wireless headphones.
          Featuring noise cancellation, long-lasting battery life, and a sleek
          modern design for everyday use.
        </p>

        <button onClick={() => dispatch(addItem(1))} className="btn">
          Add to Cart
        </button>
         <button onClick={() => dispatch(removeItem(1))} className="remove-button btn">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
