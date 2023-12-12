package com.example.springdemo.dao;

import com.example.springdemo.pojo.Cart;
import com.example.springdemo.pojo.User;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface CartDAO extends JpaRepository<Cart, Integer> {
    List<Cart> findByUser(User user);
    @Transactional
    void deleteByCartid(int cartid);

}
