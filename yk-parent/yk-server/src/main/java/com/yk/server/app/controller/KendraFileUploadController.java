package com.yk.server.app.controller;

import java.io.FileOutputStream;
import java.util.List;

import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yk.server.app.model.KendraSummary;
import com.yk.server.app.repository.KendraRepository;
import com.yk.server.app.upload.YuvaDataUploader;
import com.yk.server.app.writer.MainSheetWriter;
import com.yk.server.app.writer.SummaryWriter;

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
		yuvaDataUploader.uploadAllData(
				"F:\\Swadhyay\\2019\\District Data\\generated\\data.xlsx");
	}

	@GetMapping("/download")
	public String download(@RequestParam String fileName) throws Exception {
		fileName = "F:\\Swadhyay\\2019\\District Data\\generated\\" + System.currentTimeMillis() + "_" + fileName
				+ ".xlsx";
		Workbook workbook = new XSSFWorkbook();
		mainSheetWriter.createMainSheet(workbook);
		summaryWriter.createSummarySheet(workbook);
		FileOutputStream fileOut = new FileOutputStream(fileName);
		workbook.write(fileOut);
		fileOut.close();
		workbook.close();
		return fileName;
	}

	@GetMapping("/summary")
	public List<KendraSummary> summary() throws Exception {
		return summaryWriter.getSummary();
	}

}