package com.yk.server.app.upload;

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
	private KendraExcelReader kendraExcelReader;

	public void uploadAllData(String filePath) throws Exception {
		kendraRepo.deleteAll();
		yuvaRepo.deleteAll();
		Set<Kendra> newKendras = kendraExcelReader.read(filePath);
		System.out.println("Total kendras : " + newKendras.size());
		for (Kendra kendra : newKendras) {
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
//			Kendra pObj = kendraRepo.find(kendra.getSanghat(), kendra.getJilla(), kendra.getTaluka(), kendra.getGroup(),
//					kendra.getKendra(), kendra.getYuvaYuvati().name());
//			if (pObj != null) {
//				kendra.setId(pObj.getId());
//			}
			kendra = kendraRepo.save(kendra);
		}
	}

	private void save(Yuva yuva) {
		if (yuva != null) {
			Yuva pObj = yuvaRepo.find(yuva.getName(), yuva.getPhone(), yuva.getRole());
			if (pObj != null) {
				yuva.setId(pObj.getId());
				return;
			}
			yuva = yuvaRepo.save(yuva);
		}
	}
}