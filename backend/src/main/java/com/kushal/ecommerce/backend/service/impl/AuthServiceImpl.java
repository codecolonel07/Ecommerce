package com.kushal.ecommerce.backend.service.impl;

import com.kushal.ecommerce.backend.dto.request.LoginRequest;
import com.kushal.ecommerce.backend.dto.request.RegisterRequest;
import com.kushal.ecommerce.backend.dto.response.AuthResponse;
import com.kushal.ecommerce.backend.entity.Role;
import com.kushal.ecommerce.backend.entity.User;
import com.kushal.ecommerce.backend.repository.UserRepository;
import com.kushal.ecommerce.backend.security.JwtService;
import com.kushal.ecommerce.backend.service.interfaces.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public void register(RegisterRequest request) {

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(
                        passwordEncoder.encode(request.getPassword())
                )
                .role(Role.USER)
                .build();

        userRepository.save(user);
    }

    @Override
    public AuthResponse login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        String token = jwtService.generateToken(
                request.getEmail()
        );

        return new AuthResponse(token);
    }
}
