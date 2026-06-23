import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <header>
      <div className="logo">MyShop</div>
      <nav>
        <ul>
          <li>
            Home 
          </li>
          <li>
            Products 
          </li>
        </ul>
      </nav>
      <AddToCart />
    </header>
  );
};

export default Header;
