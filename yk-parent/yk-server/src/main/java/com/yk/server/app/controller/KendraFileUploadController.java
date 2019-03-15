package com.yk.server.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yk.server.app.repository.KendraRepository;
import com.yk.server.app.upload.YuvaDataUploader;

@RestController
@RequestMapping("/api/kendra/upload")
@CrossOrigin
public class KendraFileUploadController {

	@Autowired
	YuvaDataUploader yuvaDataUploader;

	@Autowired
	private KendraRepository kendraRepo;

	@GetMapping("/errors")
	public List<String> getErrors() {
		return kendraRepo.findErrors();
	}

	@GetMapping("/upload")
	public void upload() throws Exception {
		yuvaDataUploader.uploadAllData("F:\\Swadhyay\\2019\\District Data\\Taluka_Nizamabad_YK_Details_Colorcoded.xlsx");
	}

}