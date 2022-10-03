import Button from "../../components/button/button.component";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items" />
			<Button>Go to checkout</Button>
		</div>
	);
};

export default CartDropdown;
