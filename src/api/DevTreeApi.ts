import { isAxiosError } from "axios";
import api from "../config/axios";
import type { AccountForm, LoginForm, ProfileForm, PublicUserData, RegisterForm, User } from "../types";


export async function registerUser(formData: RegisterForm){
    try {
        const {data} = await api.post<string>(`/auth/register`, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data);
        }
    }
}

export async function login(formData : LoginForm) {
    try {
        const {data} = await api.post<string>(`/auth/login`, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.log('ERROR', error);
            throw new Error(error.response.data);
        }
    }
}


export async function getUser() {
    try {
        const { data } = await api<User>(`/user`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function updateProfile(formData : ProfileForm) {
    try {
        const { data } = await api.patch<string>(`/user`, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function updateAccount(formData : AccountForm) {
    try {
        const { data } = await api.patch<string>(`/account`, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function deleteAccount() {
    try {
        const { data } = await api.delete<string>(`/account`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function uploadImage(file: File)  {
    
    const formData = new FormData();
    formData.append('file', file);
    try {
        const {data : {image}} : {data: {image: string}} = await api.post('/user/image', formData);
        console.log('IMAGE',image);
        return image;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getUserByUsername(username : string) {
    try {
        const { data } = await api<PublicUserData>(`/${username}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function searchByUsername(username : string) {
    try {
        const { data } = await api.post<string>('/search', {username})
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}