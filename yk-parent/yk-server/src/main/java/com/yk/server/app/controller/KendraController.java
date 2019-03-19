package com.yk.server.app.controller;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.yk.server.app.model.Kendra;
import com.yk.server.app.service.KendraService;
import com.yk.server.app.validation.KendraDataValidator;

@RestController
@RequestMapping("/api/kendra")
@CrossOrigin
public class KendraController {
	@Autowired
	KendraService apiService;

	@Autowired
	KendraDataValidator validator;

	@PostMapping(value = "/create", headers = "Accept=application/json")
	public ResponseEntity<List<String>> create(@RequestBody List<Kendra> kendramDetails,
			UriComponentsBuilder ucBuilder) {
		List<String> errorsList = null;
		for (Iterator<Kendra> iterator = kendramDetails.iterator(); iterator.hasNext();) {
			Kendra kendra = (Kendra) iterator.next();
			errorsList = validator.validate(kendra);
		}
		if (errorsList.isEmpty()) {
			apiService.create(kendramDetails);
			return new ResponseEntity<List<String>>(HttpStatus.OK);

		} else {
			return new ResponseEntity<List<String>>(errorsList, HttpStatus.BAD_REQUEST);
		}

	}

	@GetMapping("/getAll")
	public List<Kendra> getAllKendrams() {
		return apiService.getAllKendrams();
	}

}