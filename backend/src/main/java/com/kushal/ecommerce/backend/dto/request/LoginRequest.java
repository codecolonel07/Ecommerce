package com.kushal.ecommerce.backend.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {

    @Email(message = "Invalid Email")
    @NotBlank(message = "Email is required for login")
    private String email;

    @NotBlank(message = "Password is required to login")
    private String password;
}
