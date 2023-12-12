package com.example.springdemo.controller;

import com.example.springdemo.pojo.User;
import com.example.springdemo.result.Result;
import com.example.springdemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import javax.servlet.http.HttpSession;

@Controller
public class LoginController {

    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping(value = "/api/login")
    @ResponseBody
    public Result login(@RequestBody User requestUser, HttpSession session) {
        String username = requestUser.getUsername();
        username = HtmlUtils.htmlEscape(username);

        User user = userService.get(username, requestUser.getPassword());
        if (null == user) {
            return new Result(400);
        } else {
            session.setAttribute("user", user);
            return new Result(200);
        }
    }

    @CrossOrigin
    @PutMapping(value = "/api/login")
    @ResponseBody
    public Result sign(@RequestBody User requestUser, HttpSession session) {
        userService.add(requestUser);
        session.setAttribute("user", requestUser);
        return new Result(200);
    }
}
