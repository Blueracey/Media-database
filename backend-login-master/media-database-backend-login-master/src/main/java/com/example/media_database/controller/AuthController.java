package com.example.media_database.controller;

import com.example.media_database.model.User;
import com.example.media_database.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody User user) {
        try {
            User registeredUser = userService.registerUser(user);
            return ResponseEntity.ok(registeredUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("User already exists or invalid input!");
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody Map<String, String> credentials) {
        Optional<User> user = userService.authenticateUser(
                credentials.get("username"), credentials.get("password"));

        return user.map(value -> ResponseEntity.ok("Welcome, " + value.getUsername()))
                .orElseGet(() -> ResponseEntity.status(401).body("Invalid username or password"));
    }
}
