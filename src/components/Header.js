import { Link } from "react-router-dom";
import { LOGO_IMG } from "../utils/Constants";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

    return(
      <div className='flex justify-between bg-pink-100 shadow-lg m-2 lg:bg-green-200'>
        <div className='logo-container'>
          <img className="w-60" src={LOGO_IMG} alt='logo'/>
        </div>
        <div className='flex items-center'>
          <ul className="flex p-4 m-4">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
          </ul>
        </div>
      </div>
    )
}

export default Header;