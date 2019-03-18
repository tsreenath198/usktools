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
import org.springframework.util.StringUtils;

import com.yk.server.app.model.Kendra;
import com.yk.server.app.model.KendraCategory;
import com.yk.server.app.model.KendraStatus;
import com.yk.server.app.model.KendraType;
import com.yk.server.app.model.YuvaYuvati;
import com.yk.server.app.util.Role;
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
			List<Integer> colWidths = new ArrayList<>();
			Row rowObj = sheet.getRow(0);
			for (int col = 0; col < rowObj.getLastCellNum(); col++) {
				colWidths.add(sheet.getColumnWidth(col) / 256);
			}
			System.out.println(colWidths);
			for (int row = 1; row < sheet.getLastRowNum(); row++) {
				rowObj = sheet.getRow(row);
				if (rowObj != null && StringUtils.hasText(getCellValue(rowObj, 0))) {
					addKendram(rowObj, kendrans);
				}
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
		for (Role rcMap : Role.values()) {
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

	private void setPersonalFields(Kendra kendra, Row rowObj, Role rcMap, List<String> errors) {

		if (YuvaYuvati.YUVATI.equals(kendra.getYuvaYuvati())) {
			if (rcMap.equals(Role.J_SANNIDATHA)) {
				kendra.getjSannidatha().setName("N/A");
				kendra.getjSannidatha().setDob(null);
				kendra.getjSannidatha().setPhone(null);
				return;
			}
			if (rcMap.equals(Role.T_SANNIDATHA)) {
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
		switch (rcMap) {
		case SANCHALAK_1:
			if (!StringUtils.hasText(name)) {
				kendra.setSanchalak1(null);
			} else {
				kendra.getSanchalak1().setName(name);
				kendra.getSanchalak1().setPhone(phone);
				kendra.getSanchalak1().setDob(dob);
			}
			break;
		case SANCHALAK_2:
			if (!StringUtils.hasText(name)) {
				kendra.setSanchalak2(null);
			} else {
				kendra.getSanchalak2().setName(name);
				kendra.getSanchalak2().setPhone(phone);
				kendra.getSanchalak2().setDob(dob);
			}
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

		kendra.setKendraType(findKendramType(getCellValue(rowObj, 16)));
		kendra.setYuvaYuvati(findYuvaYuvati(getCellValue(rowObj, 17)));
		kendra.setYearOfKendra(getCellValue(rowObj, 18));
		kendra.setCategory(findKendraCategory(getCellValue(rowObj, 19)));
		kendra.setKendraNumber(getCellValue(rowObj, 20));
		kendra.setStatus(findKendraStatus(getCellValue(rowObj, 21)));
		kendra.setYearMerged(getCellValue(rowObj, 22));
		kendra.setMergedTo(getCellValue(rowObj, 23));
		kendra.setMinAttendance(getCellValue(rowObj, 30));
		kendra.setMaxAttendance(getCellValue(rowObj, 31));
		kendra.setYKConducted(getCellValue(rowObj, 32));
		kendra.setVillageOfYK(getCellValue(rowObj, 33));
		kendra.setLandmark(getCellValue(rowObj, 34));
		kendra.setyKSthal(getCellValue(rowObj, 35));
		kendra.setyKSthalPin(getCellValue(rowObj, 36));
		kendra.setDayOfYK(getCellValue(rowObj, 37));
		if (rowObj.getRowNum() == 1) {
			System.out.println();
		}
		kendra.setTimeOfYK(getCellValue(rowObj, 38));
		kendra.setSwadhyayLoc(getCellValue(rowObj, 39));
		kendra.setSwadhyayVillage(getCellValue(rowObj, 40));
	}

	private KendraStatus findKendraStatus(String cellValue) {
		for (KendraStatus e : KendraStatus.values()) {
			if (e.toString().equalsIgnoreCase(cellValue)) {
				return e;
			}
		}
		return null;
	}

	private KendraCategory findKendraCategory(String cellValue) {
		for (KendraCategory e : KendraCategory.values()) {
			if (e.toString().equalsIgnoreCase(cellValue)) {
				return e;
			}
		}
		return null;
	}

	private YuvaYuvati findYuvaYuvati(String cellValue) {
		for (YuvaYuvati e : YuvaYuvati.values()) {
			if (e.toString().equalsIgnoreCase(cellValue)) {
				return e;
			}
		}
		return null;
	}

	private KendraType findKendramType(String cellValue) {
		for (KendraType e : KendraType.values()) {
			if (e.toString().equalsIgnoreCase(cellValue)) {
				return e;
			}
		}
		return null;
	}
}
