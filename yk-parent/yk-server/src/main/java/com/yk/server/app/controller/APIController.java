package com.yk.server.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.yk.server.app.model.YuvanDetails;
import com.yk.server.app.service.APIService;

@RestController
@RequestMapping("/api/yuvan")
@CrossOrigin
public class APIController {
	@Autowired
	APIService apiService;

	@PostMapping(value = "/create", headers = "Accept=application/json")
	public void createUser(@RequestBody List<YuvanDetails> yuvanDetails, UriComponentsBuilder ucBuilder) {
		System.out.println(yuvanDetails.toString());
		apiService.createUser(yuvanDetails);
	}

}