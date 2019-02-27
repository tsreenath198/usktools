package com.yk.server.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yk.server.app.model.YuvanDetails;

@RestController
@RequestMapping("/api/yuvan")
@CrossOrigin
public class APIController {

	@PostMapping("/create")
	public void create(@Valid @RequestBody List<YuvanDetails> yuvanDetails) {
		System.out.println(yuvanDetails.toString());
	}
}
