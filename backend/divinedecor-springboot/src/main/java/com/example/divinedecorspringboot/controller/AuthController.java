package com.example.divinedecorspringboot.controller;

import com.example.divinedecorspringboot.model.User;
import com.example.divinedecorspringboot.repository.AuthRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthRepo authRepo;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return authRepo.save(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestParam String email, @RequestParam String password) {
        User user = authRepo.findByEmailAndPassword(email, password);
        if (user == null) {
            return null;
        }
        return user;
    }
}
