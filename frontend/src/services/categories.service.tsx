import axios from 'axios';
import { Dispatch } from 'react';
import { toast } from 'react-toastify';

import {
    GET_ALL_CATEGORIES,
    GET_ALL_QUIZZESS_OF_SELECTED_CATEGORY,
    SELECTED_CATERGORY
} from '../constants/constants';

import {
    ActionsTypes,
    CategoriesRes,
    SelectedCategoryQuizzessRes,
    SelectedCategoryDetails
} from '../types/types';


const getAllCategories = async (dispatch: Dispatch<ActionsTypes>): Promise<void> => {
    try {
        const response = await axios.get<CategoriesRes>(`${process.env.REACT_APP_SERVER_URL}/api/category`);
        dispatch({ type: GET_ALL_CATEGORIES, payload: { categories: response.data.categories } });
    } catch (err) {
        console.log(err);
        toast.error('Something went wrong in fetching categories');
    }
};

const getQuizzess = async (dispatch: Dispatch<ActionsTypes>, id: string): Promise<void> => {
    try {
        const response = await axios.get<SelectedCategoryQuizzessRes>(`${process.env.REACT_APP_SERVER_URL}/api/category/${id}`);
        dispatch({ type: GET_ALL_QUIZZESS_OF_SELECTED_CATEGORY, payload: { selectedCategoryQuizzess: response.data.quizzes } });
    } catch (err) {
        console.log(err);
        toast.error('Something went wrong in fetching quizzess of selected Category');
    }
};

const getSingleCategoryDetails = async (dispatch: Dispatch<ActionsTypes>, id: string): Promise<void> => {
    try {
        const response = await axios.get<SelectedCategoryDetails>(`${process.env.REACT_APP_SERVER_URL}/api/category/single/${id}`);
        dispatch({ type: SELECTED_CATERGORY, payload: { selectedCategory: response.data.SingleCategory.level, selectedCategoryID: id } });

    } catch (err) {
        console.log(err);
        toast.error('Something went wrong in fetching current selected Category');
    }

};


export {
    getAllCategories,
    getQuizzess,
    getSingleCategoryDetails
};