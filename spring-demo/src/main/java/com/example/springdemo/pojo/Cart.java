package com.example.springdemo.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;


@Entity
@Table(name = "cart")
@JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cartid")
    int cartid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "username")
    User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "productid")
    Product product;
    @Column(name = "productname")
    String productname;
    @Column(name = "quantity")
    int quantity;
    @Column(name = "price")
    int price;

    public int getCartid() {
        return cartid;
    }

    public void setCartid(int cartid) {
        this.cartid = cartid;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getProductname() {
        return productname;
    }

    public void setProduct_name(String productname) {
        this.productname = productname;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}


