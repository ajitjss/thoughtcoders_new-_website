// src/services/blogService.jsx
import axios from 'axios';
import { config } from '../config';

const API_URL = config.BASE_URL;

export const fetchAllBlogs = async () => {
    const response = await axios.get(`${API_URL}/all-blogs`);
    return response.data;
};

export const createBlog = async (formData) => {
    return await axios.post(`${API_URL}/create-blog`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const updateBlog = async (slug, updatedData) => {
    return await axios.put(`${API_URL}/blogs/${slug}`, updatedData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const deleteBlog = async (slug) => {
    return await axios.delete(`${API_URL}/delete-blogs/${slug}`);
};

export const fetchBlogBySlug = async (slug) => {
    const response = await axios.get(`${API_URL}/single-blog/${slug}`);
    return response.data;
};
