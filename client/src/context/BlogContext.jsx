// src/context/BlogContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';
import { config } from '../config';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get(`${config.BASE_URL}/api/all-blogs`);
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const createBlog = async (formData) => {
        setIsLoading(true);
        try {
            await axios.post(`${config.BASE_URL}/api/create-blog`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            await fetchBlogs();
        } catch (error) {
            console.error('Error creating blog:', error);
            throw new Error('Failed to create blog.');
        } finally {
            setIsLoading(false);
        }
    };

    const updateBlog = async (slug, updatedData) => {
        setIsLoading(true);
        try {
            await axios.put(`${config.BASE_URL}/api/blogs/${slug}`, updatedData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            await fetchBlogs();
        } catch (error) {
            console.error('Error updating blog:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const deleteBlog = async (slug) => {
        setIsLoading(true);
        try {
            await axios.delete(`${config.BASE_URL}/api/delete-blogs/${slug}`);
            await fetchBlogs();
        } catch (error) {
            console.error('Error deleting blog:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <BlogContext.Provider value={{ blogs, createBlog, updateBlog, deleteBlog, fetchBlogs, isLoading }}>
            {children}
        </BlogContext.Provider>
    );
};
