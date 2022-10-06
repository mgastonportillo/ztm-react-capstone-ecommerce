import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { setCategories } from "../../store/categories/categories.action";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getCategories = async () => {
			const categoriesArray = await getCategoriesAndDocuments("categories");
			console.log(categoriesArray);
			dispatch(setCategories(categoriesArray));
		};
		getCategories();
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop;
