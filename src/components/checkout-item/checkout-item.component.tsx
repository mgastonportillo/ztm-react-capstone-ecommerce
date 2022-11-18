import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
} from '../../store/cart/cart.action';
import {
	CheckoutItemContainer,
	ImageContainer,
	QuantityContainer,
	Arrow,
	RemoveButton,
} from './checkout-item.styles';

type CheckoutItemProps = {
	cartItem: TCartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const { name, imageUrl, price, quantity } = cartItem;

	const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	const removeItemHandler = () =>
		dispatch(removeItemFromCart(cartItems, cartItem));
	const clearItemHandler = () =>
		dispatch(clearItemFromCart(cartItems, cartItem));

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
});

export default CheckoutItem;
