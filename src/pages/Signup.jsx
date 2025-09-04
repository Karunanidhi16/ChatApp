import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom"; 

const scm = yup.object().shape({
  email: yup
  .string().email("Invalid email").required(""),
  password: yup.string().min(6, "").required(""),
});

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(scm) });

  const onSubmit = async (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Logged in with:", data);
      setLoading(false);
    //   alert("Login Successful!");
      navigate("/chatpage"); 
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-500 ">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-green-700">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder=""
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-blue-700">Set Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 bg-color"
              placeholder="xxxxxxxx"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Login" : "Login"}
          </button>
        </form>
       
       
      </div>
    </div>
  );
}
