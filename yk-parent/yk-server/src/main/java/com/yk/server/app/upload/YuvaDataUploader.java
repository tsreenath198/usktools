package com.yk.server.app.upload;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.yk.server.app.model.Kendra;
import com.yk.server.app.model.Yuva;
import com.yk.server.app.reader.KendraExcelReader;
import com.yk.server.app.repository.KendraRepository;
import com.yk.server.app.repository.YuvaRepository;

@Component
public class YuvaDataUploader {

	@Autowired
	private YuvaRepository yuvaRepo;
	
	@Autowired
	private KendraRepository kendraRepo;

	@Autowired
	private KendraExcelReader kendramExcelReader;

	public void uploadAllData(String filePath) throws Exception {
//		Set<Kendra> allKendras = readAllYuvans();
//		for (Kendra kendra : allKendras) {
//			System.out.println(kendra);
//		}
		Set<Kendra> newKendras = kendramExcelReader.read(filePath);
		for (Kendra kendram : newKendras) {
			System.out.println(kendram);
			break;
		}
		kendraRepo.saveAll(newKendras);
	}

	private Set<Kendra> readAllYuvans() {
		return new HashSet<Kendra>(kendraRepo.findAll());
	}
}
