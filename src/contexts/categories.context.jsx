import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// Actual value I want to access
export const CategoriesContext = createContext({
	categoriesMap: {},
});

// Actual component
export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setcategoriesMap] = useState({});

	const value = { categoriesMap };

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setcategoriesMap(categoryMap);
		};
		getCategoriesMap();
	}, []);

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
