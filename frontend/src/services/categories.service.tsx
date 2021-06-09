import axios from 'axios';

console.log(process.env.REACT_APP_SERVER_URL);

const getAllCategories = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/category`);
        console.log({ response });
        return response;
    } catch (err) {
        console.log(err);
    }
};

export { getAllCategories };