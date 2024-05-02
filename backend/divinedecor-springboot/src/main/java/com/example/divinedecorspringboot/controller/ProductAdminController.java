package com.example.divinedecorspringboot.controller;

import com.example.divinedecorspringboot.model.ProductsSpring;
import com.example.divinedecorspringboot.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductAdminController {
    @Autowired
    ProductRepo productRepo;
    @PostMapping("/addProduct")
    public void addProduct(@RequestBody ProductsSpring product){
        productRepo.save(product);
    }
}
