package com.yk.server.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.yk.server.app.model.Kendra;
import com.yk.server.app.service.KendraService;

@RestController
@RequestMapping("/api/kendra")
@CrossOrigin
public class KendraController {
	@Autowired
	KendraService apiService;

	@PostMapping(value = "/create", headers = "Accept=application/json")
	public void create(@RequestBody List<Kendra> kendramDetails, UriComponentsBuilder ucBuilder) {
		apiService.create(kendramDetails);
	}

	@GetMapping("/getAll")
	public List<Kendra> getAllKendrams() {
		return apiService.getAllKendrams();
	}

}