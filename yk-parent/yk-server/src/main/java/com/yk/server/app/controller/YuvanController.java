package com.yk.server.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.yk.server.app.model.Yuva;
import com.yk.server.app.service.YuvanService;

@RestController
@RequestMapping("/api/yuvan")
@CrossOrigin
public class YuvanController {
	@Autowired
	YuvanService apiService;

	@PostMapping(value = "/create", headers = "Accept=application/json")
	public void create(@RequestBody List<Yuva> yuvanDetails, UriComponentsBuilder ucBuilder) {
		apiService.create(yuvanDetails);
	}

	@GetMapping("/getAll")
	public List<Yuva> getAll() {
		return apiService.getAll();
	}

	@GetMapping("/getAllByRole/{role}")
	public List<Yuva> getAllByRole(@PathVariable("role") String role) {
		return apiService.getAllByRole(role);
	}
}