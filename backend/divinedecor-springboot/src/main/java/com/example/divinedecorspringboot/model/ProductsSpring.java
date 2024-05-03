package com.example.divinedecorspringboot.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductsSpring {
    @Id
    private Integer orderno;
    private String productname;
    private String category;
    private float price;
}

