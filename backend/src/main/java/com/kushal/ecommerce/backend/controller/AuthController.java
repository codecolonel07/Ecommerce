package com.kushal.ecommerce.backend.controller;

import com.kushal.ecommerce.backend.dto.request.LoginRequest;
import com.kushal.ecommerce.backend.dto.request.RegisterRequest;
import com.kushal.ecommerce.backend.dto.response.AuthResponse;
import com.kushal.ecommerce.backend.service.interfaces.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public void register(
            @Valid @RequestBody RegisterRequest request
    ) {
        authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(
            @Valid @RequestBody LoginRequest request
    ) {
        return authService.login(request);
    }
}
