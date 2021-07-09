import axios from 'axios';

const registerNewUser = async (data: { name: string; email: string; password: string; }) => {
    try {
        const { name, email, password } = data;
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/user/register`, { name, email, password });
        return response;
    } catch (err) {
        console.log(err);
        return err.response;
    }
};

const userLogin = async (data: { email: string; password: string; }) => {
    try {
        const { email, password } = data;
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/user/login`, {
            email, password
        });
        return response;
    } catch (err) {
        return err.response;
    }
};
export { registerNewUser, userLogin };