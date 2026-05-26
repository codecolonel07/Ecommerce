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
    <div className="flex items-center justify-center min-h-screen">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 shadow-lg rounded-2xl flex flex-col gap-4"
      >

        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="border p-3 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="border p-3 rounded-lg"
        />

        <button type='submit' disabled = {loading} className="bg-black text-white py-3 rounded-lg">
          {loading ? "Loading..." : "Login"}
        </button>

      </form>
    </div>
  );
};

export default LoginPage;