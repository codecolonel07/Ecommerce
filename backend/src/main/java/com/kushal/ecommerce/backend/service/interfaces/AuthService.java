package com.kushal.ecommerce.backend.service.interfaces;


import com.kushal.ecommerce.backend.dto.request.LoginRequest;
import com.kushal.ecommerce.backend.dto.request.RegisterRequest;
import com.kushal.ecommerce.backend.dto.response.AuthResponse;

public interface AuthService {

    void register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}
