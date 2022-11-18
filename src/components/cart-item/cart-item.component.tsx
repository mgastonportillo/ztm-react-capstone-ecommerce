import { FC, memo } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import {
	CartItemContainer,
	CartItemImg,
	ItemDetails,
} from './cart-item.styles';

type CartItemProps = {
	cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	return (
		<CartItemContainer>
			<CartItemImg src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<h2>{name}</h2>
				<span className="price">
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
});

export default CartItem;
