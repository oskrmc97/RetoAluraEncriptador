package com.alura.Encriptador.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class indexcontroller {

    @GetMapping({"/","index.html","index"})
    public String index(){
        return "index";
    }
    
}
