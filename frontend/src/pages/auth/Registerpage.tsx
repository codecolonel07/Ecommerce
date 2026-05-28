import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../service/Authservice";
import { toast } from "react-toastify";
import type {RegisterRequest,} from "../../types/auth/types";

const RegisterPage = () => {

  const navigate = useNavigate();
  const {register,handleSubmit,} = useForm<RegisterRequest>();
  const onSubmit = async (data: RegisterRequest) => {
    try {
      await registerUser(data);
      toast.success("Registration successful");
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
      >
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
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
        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;