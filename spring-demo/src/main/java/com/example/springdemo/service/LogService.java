package com.example.springdemo.service;

import com.example.springdemo.dao.LogDAO;
import com.example.springdemo.pojo.Cart;
import com.example.springdemo.pojo.Log;
import org.hibernate.mapping.Any;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LogService {
    @Autowired
    LogDAO logDAO;

    public List<Log> list() {
        return logDAO.findAll();
    }

    public Log add(Log log) {
        return logDAO.save(log);
    }

    public List<Log> listGroupByProduct(){
        Sort sort = Sort.by(Sort.Direction.ASC, "product.id");
        return logDAO.findAll(sort);
    }
}
