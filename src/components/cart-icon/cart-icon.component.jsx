import { useContext } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.style.scss";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);
	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<div className="cart-icon-container" onClick={toggleIsCartOpen}>
			<img className="shopping-icon" src={ShoppingIcon} alt="Shopping icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
