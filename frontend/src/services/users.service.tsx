import axios from 'axios';
import { Dispatch } from 'react';

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

export { registerNewUser };