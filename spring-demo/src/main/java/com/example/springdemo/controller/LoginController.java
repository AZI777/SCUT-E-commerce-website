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

    // 处理登录请求
    @CrossOrigin
    @PostMapping(value = "/api/login")
    @ResponseBody
    public Result login(@RequestBody User requestUser, HttpSession session) {
        // 对用户名进行 HTML 转义，防止 XSS 攻击
        String username = requestUser.getUsername();
        username = HtmlUtils.htmlEscape(username);

        // 调用UserService验证用户名和密码
        User user = userService.get(username, requestUser.getPassword());
        if (null == user) {
            // 验证失败，返回错误码 400
            return new Result(400);
        } else {
            // 验证成功，将用户信息存入session，并返回成功码 200
            session.setAttribute("user", user);
            return new Result(200);
        }
    }

    // 处理注册请求
    @CrossOrigin
    @PutMapping(value = "/api/login")
    @ResponseBody
    public Result sign(@RequestBody User requestUser, HttpSession session) {
        // 调用UserService添加用户
        userService.add(requestUser);

        // 将用户信息存入session，并返回成功码 200
        session.setAttribute("user", requestUser);
        return new Result(200);
    }
}
