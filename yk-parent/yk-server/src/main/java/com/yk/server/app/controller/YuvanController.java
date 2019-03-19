	package com.yk.server.app.controller;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.yk.server.app.validation.YuvaValidator;

@RestController
@RequestMapping("/api/yuvan")
@CrossOrigin
public class YuvanController {
	@Autowired
	YuvanService apiService;
	@Autowired
	YuvaValidator validator;

	@PostMapping(value = "/create", headers = "Accept=application/json")
	public ResponseEntity<List<String>> create(@RequestBody List<Yuva> yuvanDetails, UriComponentsBuilder ucBuilder) {
		List<String> errorsList = null;
		for (Iterator<Yuva> iterator = yuvanDetails.iterator(); iterator.hasNext();) {
			Yuva yuva = (Yuva) iterator.next();
			errorsList = validator.checkYuva(yuva);
		}
		if (!errorsList.isEmpty()) {
			return new ResponseEntity<List<String>>(errorsList, HttpStatus.BAD_REQUEST);
		} else {
			apiService.create(yuvanDetails);
			return new ResponseEntity<List<String>>(HttpStatus.OK);
		}

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