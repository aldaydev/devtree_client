import { isAxiosError } from "axios";
import api from "../config/axios";
import type { ProfileForm, PublicUserData, User } from "../types";

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

export async function getUserByHandle(handle : string) {
    try {
        const { data } = await api<PublicUserData>(`/${handle}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function searchByHanlde(handle : string) {
    try {
        const { data } = await api.post<string>('/search', {handle})
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}