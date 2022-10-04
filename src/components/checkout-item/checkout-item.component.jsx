import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
	CheckoutItemContainer,
	ImageContainer,
	QuantityContainer,
	Arrow,
	RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);
	const clearItemHandler = () => clearItemFromCart(cartItem);

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<span>{name}</span>
			<QuantityContainer>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<span>{quantity}</span>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</QuantityContainer>
			<span>${price}</span>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
