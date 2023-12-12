package com.example.springdemo.controller;

import com.example.springdemo.dao.ProductDAO;
import com.example.springdemo.pojo.Cart;
import com.example.springdemo.pojo.Log;
import com.example.springdemo.pojo.Product;
import com.example.springdemo.pojo.User;
import com.example.springdemo.service.CartService;
import com.example.springdemo.service.LogService;
import com.example.springdemo.service.ProductService;
import com.example.springdemo.service.UserService;
import org.hibernate.mapping.Any;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

import java.sql.Timestamp;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;

@RestController
public class MarketController {
    @Autowired
    ProductService productService;
    @Autowired
    CartService cartService;
    @Autowired
    UserService userService;
    @Autowired
    LogService logService;

    @GetMapping("/api/products")
    public List<Product> ProductList() throws Exception {
        return productService.list();
    }

    @GetMapping("/api/products/{id}")
    public Product getProduct(@PathVariable int id) throws Exception {
        return productService.findById(id);
    }


    @PostMapping("/api/products")
    public Product addOrUpdate(@RequestBody Product product) throws Exception {
        productService.addOrUpdate(product);
        return product;
    }

    @PutMapping("/api/products")
    public Product modify(@RequestBody Product product) throws Exception {
        Product getProduct = productService.findById(product.getId());
        if (getProduct != null) {
            getProduct.setDescription(product.getDescription());
            getProduct.setName(product.getName());
            getProduct.setPrice(product.getPrice());
            getProduct.setQuantity(product.getQuantity());
            getProduct.setImageUrl(product.getImageUrl());
            return productService.addOrUpdate(getProduct);
        } else
            return null;
    }

    @PostMapping("api/delete")
    public void delete(@RequestBody Product product) throws Exception {
        int id = product.getId();
        productService.deleteById(id);
    }

    @PostMapping("api/cart")
    public void addToCart(@RequestBody Map<String, Object> data) throws Exception {
        // 从请求的数据中提取所需的信息
        int quantity = (int) data.get("quantity");
        int productid = (int) data.get("productid");
        int price = (int) data.get("price");
        String username = data.get("username").toString();
        String productname = data.get("productname").toString();

        // 通过商品ID获取商品信息
        Product product = productService.findById(productid);

        // 通过用户名获取用户信息
        User user = userService.getByName(username);

        // 创建一个购物车对象，并设置相关属性
        Cart cart = new Cart();
        cart.setQuantity(quantity);
        cart.setPrice(price);
        cart.setProduct_name(productname);
        cart.setUser(user);
        cart.setProduct(product);

        // 调用购物车服务的方法添加或更新购物车信息
        cartService.addOrUpdate(cart);
    }


    @GetMapping("api/cart")
    public List<Cart> findCartByUser(@RequestParam("username") String username) throws Exception {
        return cartService.findByUserName(username);
    }

    @DeleteMapping("api/cart/{id}")
    public void deleteCartItem(@PathVariable int id) {
        cartService.deleteCartItem(id);
    }

    @PostMapping("api/mail")
    public void sendMail(@RequestBody Map<String, Object> data) {
        String name = data.get("name").toString();
        String total_price = data.get("total_price").toString();
        String quantity = data.get("quantity").toString();
        // 收件人电子邮箱
        String to = data.get("mail").toString();

        // 发件人电子邮箱
        String from = "913685472@qq.com";

        // 发件人授权码
        String password = "ttfnxlysgmytbfjf";

        // 指定SMTP服务器
        String host = "smtp.qq.com";

        // SMTP端口号
        int port = 465;

        // 获取系统属性
        Properties properties = System.getProperties();

        // 设置SMTP服务器和端口号
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", port);
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.ssl.enable", "true");

        // 获取默认session对象
        Session session = Session.getInstance(properties, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });

        try {
            // 创建默认的MimeMessage对象
            MimeMessage message = new MimeMessage(session);

            // 设置From: 头部
            message.setFrom(new InternetAddress(from));

            // 设置To: 头部
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // 设置Subject: 头部
            message.setSubject("购物凭证");

            // 设置消息体
            message.setText("尊敬的客户,您好！您购买的"+quantity+"件"+name+",总价为"+total_price+"元，现已发货，望知悉！\n");

            // 发送消息
            Transport.send(message);
            System.out.println("Sent message successfully....");
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }
    }

    @GetMapping("/api/log")
    public List<Log> findLog(){
        return logService.list();
    }

    @PostMapping("/api/log")
    public void addLog(@RequestBody Map<String,Object> data){
        Log log=new Log();
        log.setUser(userService.getByName((String) data.get("username")));
        log.setProduct(productService.findById((int)data.get("productid")));
        log.setProductname((String) data.get("productname"));
        log.setPrice((int) data.get("price"));
        log.setQuantity((int) data.get("quantity"));

        // 将时间字符串解析为 LocalDateTime 对象
        String timeString = (String) data.get("time");
        DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
        LocalDateTime localDateTime = LocalDateTime.parse(timeString, formatter);

        // 将 LocalDateTime 对象转换为 java.sql.Timestamp
        Timestamp timestamp = Timestamp.valueOf(localDateTime);
        log.setTime(timestamp);


        log.setTotal((int) data.get("total"));
        logService.add(log);
    }

    @GetMapping("/api/record")
    public List<Log> getRecord()
    {
        return logService.listGroupByProduct();
    }
}

