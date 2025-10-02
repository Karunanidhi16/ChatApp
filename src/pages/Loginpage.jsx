import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom"; 
import axios from 'axios';

const scm = yup.object().shape({
    email: yup
    .string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function Loginpage() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(scm) });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            // 1. Send POST request to your backend's login route
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email: data.email,
                password: data.password
            });
            
            // 2. Store the token and user data
            const { token, userId, username } = response.data;
            localStorage.setItem('chatAppToken', token);
            localStorage.setItem('currentUserId', userId); 
            localStorage.setItem('currentUsername', username); 

            console.log("Login Successful! Token stored.");
            navigate('/'); // Navigate to the main chat page
            
        } catch (error) {
            // Handle errors (e.g., Status 400 'Invalid Credentials')
            console.error("Login Failed:", error.response?.data?.msg || "Login failed. Check your credentials.");
            alert(error.response?.data?.msg || "Login failed. Check your credentials.");
            reset(); // Clear the form on failure
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-red-500 ">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-green-700">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="user@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="block text-blue-700">Password</label>
                        <input
                            type="password"
                            {...register("password")}
                            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 bg-color"
                            placeholder="********"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                    >
                        {loading ? "Signing In..." : "Login"}
                    </button>
                </form>
                <p className="text-sm text-center mt-4">
                    Don’t have an account... 
                    <Link to="/signup" className="mt-1 hover:underline text-blue-500 ">Signup</Link> 
                </p>
            </div>
        </div>
    );
}