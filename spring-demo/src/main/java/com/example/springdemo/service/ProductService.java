package com.example.springdemo.service;

import com.example.springdemo.dao.ProductDAO;
import com.example.springdemo.pojo.Product;
import org.hibernate.mapping.Any;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductDAO productDAO;

    public List<Product> list() {
        Sort sort = new Sort(Sort.Direction.DESC, "id");
        return productDAO.findAll(sort);
    }

    public Product addOrUpdate(Product product) {
        return productDAO.save(product);
    }



    public void deleteById(int id) {
        productDAO.deleteById(id);
    }

    public Product findById(int id){return productDAO.findById(id).orElse(null);}



}

