import axios from 'axios';
import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { SET_LOGGED_IN_USER_DETAILS } from '../constants/constants';
import { ActionsTypes, getUserDetailsRes, UpdateScoreResponse, User } from '../types/types';

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

const getUserDetails = async (dispatch: Dispatch<ActionsTypes>) => {
    try {
        const response = await axios.get<getUserDetailsRes>(`${process.env.REACT_APP_SERVER_URL}/api/user`, { headers: { 'x-auth-token': localStorage.getItem('token') } });
        const { user } = response.data;
        const userObject: User = {
            name: user.name,
            email: user.email,
            quizPlayed: user.quizPlayed
        };
        dispatch({ type: SET_LOGGED_IN_USER_DETAILS, payload: { user: userObject } });
    } catch (err) {
        const errorMessage = err.response.data.message;
        toast.error(errorMessage);
    }
};

const updateUserScore = async (totalscore: number, id: any) => {
    try {
        const response = await axios.post<UpdateScoreResponse>(`${process.env.REACT_APP_SERVER_URL}/api/user/score`, { 'quizId': id.id, 'score': totalscore }, { headers: { 'x-auth-token': localStorage.getItem('token') } });
        return response;
    } catch (err) {
        return err.response;
    }
};

export { registerNewUser, userLogin, getUserDetails, updateUserScore };