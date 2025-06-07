import { isAxiosError } from "axios";
import api from "../config/axios";
import type { AccountForm, ProfileForm, PublicUserData, User } from "../types";

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

export async function uploadImage(file: File)  {
    const formData = new FormData();
    formData.append('file', file);
    try {
        const {data : {image}} : {data: {image: string}} = await api.post('/user/image', formData);
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