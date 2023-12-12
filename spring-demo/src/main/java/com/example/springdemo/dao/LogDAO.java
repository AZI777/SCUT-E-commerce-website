package com.example.springdemo.dao;

import com.example.springdemo.pojo.Cart;
import com.example.springdemo.pojo.Log;
import com.example.springdemo.pojo.User;
import org.hibernate.mapping.Any;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public interface LogDAO extends JpaRepository<Log, Integer> {



}
