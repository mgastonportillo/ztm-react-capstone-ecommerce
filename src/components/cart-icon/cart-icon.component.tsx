import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectIsCartOpen,
	selectCartCount,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import ShoppingIcon from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
	const dispatch = useDispatch();

	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);

	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

	useEffect(() => {
		const escHandler = (event: KeyboardEvent) => {
			if (isCartOpen === true && event.key === 'Escape') {
				dispatch(setIsCartOpen(false));
			}
		};
		document.addEventListener('keydown', escHandler);
		return () => document.removeEventListener('keydown', escHandler);
	}, [isCartOpen]);

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<img src={ShoppingIcon} alt="Shopping icon" />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
