package com.example.springdemo.dao;

import com.example.springdemo.pojo.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ProductDAO extends JpaRepository<Product, Integer> {

}
