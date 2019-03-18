package com.yk.server.app.upload;

import java.util.HashSet;
import java.util.Set;

import javax.transaction.Transactional;

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
	private KendraExcelReader kendraExcelReader;

	public void uploadAllData(String filePath) throws Exception {
		kendraRepo.deleteAll();
		yuvaRepo.deleteAll();
		Set<Kendra> newKendras = kendraExcelReader.read(filePath);
		for (Kendra kendra : newKendras) {
			System.out.println(kendra);
			save(kendra.getjSannidatha());
			save(kendra.gettSannidatha());
			save(kendra.getAvekshak());
			save(kendra.getSanchalak1());
			save(kendra.getSanchalak2());
			saveKendram(kendra);
		}
		System.out.println("SAVED!!!");
	}

	private void saveKendram(Kendra kendra) {
		if (kendra != null) {
			Kendra pObj = kendraRepo.find(kendra.getSanghat(), kendra.getJilla(), kendra.getTaluka(), kendra.getGroup(),
					kendra.getKendra(), kendra.getYuvaYuvati().toString());
			if (pObj != null) {
				kendra.setId(pObj.getId());
			}
			kendra = kendraRepo.save(kendra);
		}
	}

	private void save(Yuva yuva) {
		if (yuva != null) {
			Yuva pObj = yuvaRepo.find(yuva.getName(), yuva.getPhone(), yuva.getRole());
			if (pObj != null) {
				yuva.setId(pObj.getId());
			}
			yuva = yuvaRepo.save(yuva);
		}
	}

	private Set<Kendra> readAllYuvans() {
		return new HashSet<Kendra>(kendraRepo.findAll());
	}
}
