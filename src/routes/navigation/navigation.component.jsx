import React, { Fragment, useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

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
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<img src={CrwnLogo} alt="Crwn" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					<Link className="nav-link" to="/contact">
						CONTACT
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							{" "}
							SIGN OUT{" "}
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
