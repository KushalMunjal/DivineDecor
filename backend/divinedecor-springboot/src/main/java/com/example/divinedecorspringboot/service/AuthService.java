package com.example.divinedecorspringboot.service;

import com.example.divinedecorspringboot.model.User;

public interface AuthService {
    User registerUser(User user);
    User loginUser(String username, String password);
}
