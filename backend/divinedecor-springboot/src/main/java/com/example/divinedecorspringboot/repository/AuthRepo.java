package com.example.divinedecorspringboot.repository;

import com.example.divinedecorspringboot.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface AuthRepo extends MongoRepository<User,String> {
    User findByEmailAndPassword(String email, String password);
}
