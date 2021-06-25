import axios from 'axios';
import { GET_ALL_CATEGORIES } from '../constants/constants';
import { Category, ServerError } from '../types/category.types';
import { ActionsTypes } from '../types/reducer.types';

const getAllCategories = async (dispatch: (action: ActionsTypes) => void) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/category`);
        dispatch({ type: GET_ALL_CATEGORIES, payload: { categories: response.data.categories } });
    } catch (err) {
        console.log(err);
    }
};

export { getAllCategories };