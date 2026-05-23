import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../service/Authservice";
import type { LoginRequest } from "../../types/auth/types";
import useAuth from "../../hooks/useAuth";

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginRequest>();
  const navigate = useNavigate();
  const { login } = useAuth();
  const onSubmit = async (
    data: LoginRequest
  ) => {

    try {
      const response = await loginUser(data);
      login(response.token);
      navigate("/");
    } catch (error) {
      console.error(error);
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

        <button type='submit' className="bg-black text-white py-3 rounded-lg">
          Login
        </button>

      </form>
    </div>
  );
};

export default LoginPage;