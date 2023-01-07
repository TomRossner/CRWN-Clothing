import { createAction } from "../../utils/reducer";
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categories) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);
export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);