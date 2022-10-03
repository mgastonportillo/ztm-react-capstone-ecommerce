import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";

// Actual value I want to access
export const ProductsContext = createContext({
	products: [],
});

// Actual component
export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState(SHOP_DATA);
	const value = { products };

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
