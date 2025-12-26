package com.shconstructions.backend.controller;

import com.shconstructions.backend.dto.AuthResponse;
import com.shconstructions.backend.dto.LoginRequest;
import com.shconstructions.backend.dto.RegisterRequest;
import com.shconstructions.backend.model.Role;
import com.shconstructions.backend.model.User;
import com.shconstructions.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth") // CHANGED FROM /api/users TO /api/auth
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest request) {
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already taken.");
        }

        User newUser = new User();
        newUser.setUsername(request.getUsername());
        newUser.setPassword(passwordEncoder.encode(request.getPassword()));

        try {
            if (request.getRole() != null && !request.getRole().isEmpty()) {
                newUser.setRole(Role.valueOf(request.getRole().toUpperCase()));
            } else {
                newUser.setRole(Role.USER);
            }
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid Role. Use 'USER' or 'ADMIN'.");
        }

        userRepository.save(newUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(new AuthResponse(newUser.getUsername(), newUser.getRole().name(), "User registered successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByUsername(loginRequest.getUsername());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                return ResponseEntity.ok(new AuthResponse(
                    user.getUsername(), 
                    user.getRole().name(), 
                    "Login Successful"
                ));
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}
