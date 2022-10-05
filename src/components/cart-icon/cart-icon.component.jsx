import { useContext, useEffect } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	useEffect(() => {
		const escHandler = (e) => {
			if (e.key === "Escape") {
				setIsCartOpen(false);
			}
		};
		document.addEventListener("keydown", escHandler);
		return () => document.removeEventListener("keydown", escHandler);
	}, []);

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<img src={ShoppingIcon} alt="Shopping icon" />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
