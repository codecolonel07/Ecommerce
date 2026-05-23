import axiosInstance from "../api/axios";
import type{
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "../types/auth/types";

export const loginUser = async (
  data: LoginRequest
): Promise<AuthResponse> => {

  const response = await axiosInstance.post(
    "/auth/login",
    data
  );

  return response.data;
};

export const registerUser = async (
  data: RegisterRequest
) => {

  const response = await axiosInstance.post(
    "/auth/register",
    data
  );

  return response.data;
};