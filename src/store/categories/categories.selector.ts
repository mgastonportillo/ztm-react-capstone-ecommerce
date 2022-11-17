import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoriesState } from './categories.reducer';
import { CategoryMap } from './categories.types';

const selectCategoriesReducer = (state: RootState): CategoriesState =>
	state.categories;

export const selectCategories = createSelector(
	[selectCategoriesReducer],
	(categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories): CategoryMap =>
		categories.reduce((accumulator, category) => {
			const { title, items } = category;
			accumulator[title.toLowerCase()] = items;
			return accumulator;
		}, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
	[selectCategoriesReducer],
	(categoriesSlice) => categoriesSlice.isLoading
);
