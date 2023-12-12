package com.example.springdemo.service;

import com.example.springdemo.dao.CartDAO;
import com.example.springdemo.pojo.Cart;
import com.example.springdemo.pojo.User;
import com.example.springdemo.pojo.Product;
import com.example.springdemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    CartDAO cartDAO;
    @Autowired
    UserService userService;


    public List<Cart> list() {
        return cartDAO.findAll();
    }

    public List<Cart> findByUserName(String username) {
        User user = userService.getByName(username);
        return cartDAO.findByUser(user);
    }

    public Cart addOrUpdate(Cart cart) {
        return cartDAO.save(cart);
    }

    public Cart findById(int id) {
        return cartDAO.findById(id).orElse(null);
    }

    public void deleteCartItem(int cartid){cartDAO.deleteByCartid(cartid);}

}

