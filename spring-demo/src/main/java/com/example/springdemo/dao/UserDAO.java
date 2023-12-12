package com.example.springdemo.dao;

import com.example.springdemo.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<User,String> {
    User findByUsername(String username);

    User getByUsernameAndPassword(String username,String password);
}