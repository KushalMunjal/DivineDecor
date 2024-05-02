package com.example.divinedecorspringboot.repository;

import com.example.divinedecorspringboot.model.ProductsSpring;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepo extends MongoRepository <ProductsSpring,Integer>{

}
