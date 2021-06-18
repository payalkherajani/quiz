import axios from 'axios';
import { Category, ServerError } from '../types/category.types';

const getAllCategories = async (): Promise<Category | ServerError> => {
    try {
        const response = await axios.get<Category>(`${process.env.REACT_APP_SERVER_URL}/api/category`);
        console.log({ response });
        return response.data;
    } catch (err) {
        console.log(err);
        return { message: 'Something Went wrong' } as ServerError;

    }
};

export { getAllCategories };