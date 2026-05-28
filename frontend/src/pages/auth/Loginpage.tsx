import { useForm } from "react-hook-form";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../service/Authservice";
import type { LoginRequest } from "../../types/auth/types";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginRequest>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);  
  const { login } = useAuth();
  const onSubmit = async (data: LoginRequest) => {
    try {
      setLoading(true);
      const response = await loginUser(data);
      login(response.token);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      toast.error("Invalid credentials");
      console.error(error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >

        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button type='submit' disabled = {loading} className="bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
          {loading ? "Loading..." : "Login"}
        </button>

      </form>
    </div>
  );
};

export default LoginPage;