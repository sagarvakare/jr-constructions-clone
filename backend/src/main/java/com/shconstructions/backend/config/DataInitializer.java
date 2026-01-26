package com.shconstructions.backend.config;

import com.shconstructions.backend.model.Role;
import com.shconstructions.backend.model.User;
import com.shconstructions.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Bean
    public CommandLineRunner initData() {
        return args -> {
            // Check if Admin exists, if not, create one
            if (userRepository.findByUsername("admin").isEmpty()) {
                User admin = new User();
                admin.setUsername("admin");
                admin.setPassword(passwordEncoder.encode("password"));
                admin.setRole(Role.ADMIN);
                userRepository.save(admin);
                System.out.println(">>> DEFAULT ADMIN USER CREATED: (username: admin, password: password)");
            }
        };
    }
}
