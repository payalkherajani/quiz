import axios from 'axios';
import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { GET_ALL_CATEGORIES } from '../constants/constants';
import { ActionsTypes, CategoriesRes } from '../types/types';


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
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/category/${id}`);
        console.log({ response });
        //add quizzes state in initial state and proceed from here
    } catch (err) {
        console.log(err);
        toast.error('Something went wrong in fetching quizzess of selected Category');
    }
};
export { getAllCategories, getQuizzess };