import { createContext, useState } from "react";

// Actual value I want to access
export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
});

// Actual component
export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const value = { isCartOpen, setIsCartOpen };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
