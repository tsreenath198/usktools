/*package com.yk.server.app.controller;

import java.util.List;

import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yk.server.app.MainSheetWriter;
import com.yk.server.app.SummaryWriter;
import com.yk.server.app.model.KendraSummary;
import com.yk.server.app.repository.KendraRepository;
import com.yk.server.app.upload.YuvaDataUploader;

@RestController
@RequestMapping("/api/kendra/upload")
@CrossOrigin
public class KendraFileUploadController {

	@Autowired
	YuvaDataUploader yuvaDataUploader;

	@Autowired
	private MainSheetWriter mainSheetWriter;

	@Autowired
	private SummaryWriter summaryWriter;

	@Autowired
	private KendraRepository kendraRepo;

	@GetMapping("/errors")
	public List<String> getErrors() {
		return kendraRepo.findErrors();
	}

	@GetMapping("/upload")
	public void upload() throws Exception {
		yuvaDataUploader
				.uploadAllData("F:\\Swadhyay\\2019\\District Data\\2019 Nizamabad_YK Details.xls");
	}

	@GetMapping("/download")
	public String download(@RequestParam String fileName) throws Exception {
		Workbook workbook = new XSSFWorkbook();
		String filename = mainSheetWriter.createMainSheet(workbook, fileName);
		workbook.close();
		return filename;
	}

	@GetMapping("/summary")
	public List<KendraSummary> summary() throws Exception {
		return summaryWriter.getSummary();
	}

}*/