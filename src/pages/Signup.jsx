import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import axios from 'axios';

const scm = yup.object().shape({
    username: yup.string().required("Username is required"), // Added username field
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function Signup() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(scm) });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            // Send POST request to your backend's register route
            await axios.post('http://localhost:5000/api/auth/register', {
                username: data.username,
                email: data.email,
                password: data.password
            });

            console.log("Registration Successful.");
            alert("Registration successful! Please log in.");
            navigate("/login"); // Navigate to the login page on success
            
        } catch (error) {
            console.error("Registration Failed:", error.response?.data?.msg || "Registration failed.");
            alert(error.response?.data?.msg || "Registration failed. Please check if the email is already in use.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-red-500 ">Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* NEW USERNAME INPUT */}
                    <div>
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            {...register("username")}
                            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Enter a username"
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                    </div>

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
                        <label className="block text-blue-700">Set Password</label>
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
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                    <p className="mt-4 text-center text-gray-700">
                        Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}