package com.example.springdemo.config;

import com.example.springdemo.interceptor.LoginInterceptor;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.*;

@SpringBootConfiguration
public class MyWebConfigurer implements WebMvcConfigurer {

    // 注入登录拦截器
    @Bean
    public LoginInterceptor getLoginInterceptor() {
        return new LoginInterceptor();
    }

    // 添加拦截器
    @Override
    public void addInterceptors(InterceptorRegistry registry){
        // 对所有路径进行拦截，但排除 "/index.html" 路径
        registry.addInterceptor(getLoginInterceptor()).addPathPatterns("/**").excludePathPatterns("/index.html");
    }

    // 添加跨域配置
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // 允许所有请求跨域访问
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("*")
                .allowedHeaders("*");
    }

}
