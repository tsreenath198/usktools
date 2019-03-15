package com.yk.server.app.reader;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.yk.server.app.model.Kendra;
import com.yk.server.app.util.RoleColMapEnum;
import com.yk.server.app.validation.KendraDataValidator;

@Component
public class KendraExcelReader extends ExcelReader<Kendra> {

	@Autowired
	KendraDataValidator kendraDataValidator;

	@Override
	public Set<Kendra> read(String filePath) throws Exception {
		XSSFWorkbook workbook = null;
		Set<Kendra> kendrans = new HashSet<Kendra>();
		try {

			workbook = new XSSFWorkbook(new File(filePath));
			XSSFSheet sheet = workbook.getSheetAt(0);
			for (int row = 1; row < sheet.getLastRowNum(); row++) {
				Row rowObj = sheet.getRow(row);
				addKendram(rowObj, kendrans);
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (workbook != null) {
				try {
					workbook.close();
				} catch (Exception e) {
					System.err.println(e.getMessage());
				}
			}
		}
		return kendrans;
	}

	private void addKendram(Row rowObj, Set<Kendra> kendras) {
		Kendra kendra = new Kendra();
		List<String> errors = new ArrayList<>();
		populateOtherFields(rowObj, kendra);
		for (RoleColMapEnum rcMap : RoleColMapEnum.values()) {
			setPersonalFields(kendra, rowObj, rcMap, errors);
		}
		errors.addAll(kendraDataValidator.validate(kendra));
		if (errors.size() > 0) {
			System.err.println(kendra.getTaluka() + " " + kendra.getKendra() + " " + kendra.getYuvaYuvati() + " "
					+ (rowObj.getRowNum() + 1) + " ERRORS : " + errors);
			kendra.setErrors(kendra.getTaluka() + " " + kendra.getKendra() + " " + kendra.getYuvaYuvati() + " "
					+ (rowObj.getRowNum() + 1) + " ERRORS : " + errors);
		}
		kendras.add(kendra);
	}

	private void setPersonalFields(Kendra kendra, Row rowObj, RoleColMapEnum rcMap, List<String> errors) {

		if ("Yuvati".equalsIgnoreCase(kendra.getYuvaYuvati())) {
			if (rcMap.equals(RoleColMapEnum.J_SANNIDATHA)) {
				kendra.getjSannidatha().setName("N/A");
				kendra.getjSannidatha().setDob(null);
				kendra.getjSannidatha().setPhone(null);
				return;
			}
			if (rcMap.equals(RoleColMapEnum.T_SANNIDATHA)) {
				kendra.gettSannidatha().setName("N/A");
				kendra.gettSannidatha().setDob(null);
				kendra.gettSannidatha().setPhone(null);
				return;
			}
		}
		String name = super.getCellValue(rowObj, rcMap.getNameCol());
		Date dob = null;
		try {
			dob = super.getDateValue(rowObj, rcMap.getDobCol());
		} catch (Exception e) {
			errors.add(rcMap.getRole() + " DOB : " + e.getMessage());
		}
		String phone = super.getCellValue(rowObj, rcMap.getPhoneCol());
		if ("Yuvati".equalsIgnoreCase(kendra.getYuvaYuvati())) {
			if (rcMap.equals(RoleColMapEnum.J_SANNIDATHA)) {
				kendra.getjSannidatha().setName("N/A");
				kendra.getjSannidatha().setDob(null);
				kendra.getjSannidatha().setPhone(null);
			}
			if (rcMap.equals(RoleColMapEnum.T_SANNIDATHA)) {
				kendra.gettSannidatha().setName("N/A");
				kendra.gettSannidatha().setDob(null);
				kendra.gettSannidatha().setPhone(null);
			}
		}
		switch (rcMap) {
		case SANCHALAK_1:
			kendra.getSanchalak1().setName(name);
			kendra.getSanchalak1().setPhone(phone);
			kendra.getSanchalak1().setDob(dob);
			break;
		case SANCHALAK_2:
			kendra.getSanchalak2().setName(name);
			kendra.getSanchalak2().setPhone(phone);
			kendra.getSanchalak2().setDob(dob);
			break;
		case AVEKSHAK:
			kendra.getAvekshak().setName(name);
			kendra.getAvekshak().setPhone(phone);
			kendra.getAvekshak().setDob(dob);
			break;
		case T_SANNIDATHA:
			kendra.gettSannidatha().setName(name);
			kendra.gettSannidatha().setPhone(phone);
			kendra.gettSannidatha().setDob(dob);
			break;
		case J_SANNIDATHA:
			kendra.getjSannidatha().setName(name);
			kendra.getjSannidatha().setPhone(phone);
			kendra.getjSannidatha().setDob(dob);
			break;
		default:
			break;
		}
	}

	private void populateOtherFields(Row rowObj, Kendra kendra) {
		kendra.setCountry(getCellValue(rowObj, 1));
		kendra.setSanghat(getCellValue(rowObj, 2));
		kendra.setJilla(getCellValue(rowObj, 3));
		kendra.setTaluka(getCellValue(rowObj, 7));
		kendra.setGroup(getCellValue(rowObj, 11));
		kendra.setKendra(getCellValue(rowObj, 15));

		kendra.setKendraType(getCellValue(rowObj, 16));
		kendra.setYuvaYuvati(getCellValue(rowObj, 17));
		kendra.setCategory(getCellValue(rowObj, 19));
		kendra.setKendraNumber(getCellValue(rowObj, 20));
		kendra.setStatus(getCellValue(rowObj, 21));
		kendra.setYearMerged(getCellValue(rowObj, 22));
		kendra.setMergedTo(getCellValue(rowObj, 23));
		kendra.setMinAttendance(getCellValue(rowObj, 30));
		kendra.setMaxAttendance(getCellValue(rowObj, 31));
		kendra.setYKConducted(getCellValue(rowObj, 32));
		kendra.setVillageOfYK(getCellValue(rowObj, 33));
		kendra.setLandMark(getCellValue(rowObj, 34));
		kendra.setyKSthal(getCellValue(rowObj, 35));
		kendra.setyKSthalPin(getCellValue(rowObj, 36));
		kendra.setDayOfYK(getCellValue(rowObj, 37));
		kendra.setTimeOfYK(getCellValue(rowObj, 38));
		kendra.setSwadhyayLoc(getCellValue(rowObj, 39));
		kendra.setSwadhyayVillage(getCellValue(rowObj, 40));
	}

}
