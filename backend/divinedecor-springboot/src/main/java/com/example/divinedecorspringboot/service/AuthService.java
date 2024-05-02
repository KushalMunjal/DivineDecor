package com.example.divinedecorspringboot.service;

import com.example.divinedecorspringboot.model.User;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {
    User registerUser(User user);
    User loginUser(String username, String password);
}
