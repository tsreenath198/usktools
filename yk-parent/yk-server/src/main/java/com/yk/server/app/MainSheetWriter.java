package com.yk.server.app;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Component;

import com.yk.server.app.model.Kendra;
import com.yk.server.app.repository.KendraRepository;

@Component
public class MainSheetWriter {
	private String[] columnHeadings = { "Sr. No.", "Country", "Sanghat / State", "Jilla Name",
			"Jilla Sannidhata - Name in Full",
			"Jilla Sannidhata Birthdate (in dd/mm/yyyy format,  example: 31/08/1985)",
			"Jilla Sannidhata Contact No. (10 digit mobile number, if available)", "Taluka Name",
			"Taluka Sannidhata - Name in Full",
			"Taluka Sannidhata Birthdate (in dd/mm/yyyy format,  example: 31/08/1985)",
			"Taluka Sannidhata Contact No. (10 digit mobile number, if available)", "Group Name",
			"Avekshak Name in Full", "Avekshak Contact Number (10 digit mobile number, if available)",
			"Avekshak Birthdate (in dd/mm/yyyy format, example: 31/08/1985)", "Kendra Name",
			"Kendra Type (Yuva Kendra Or DPC)", "YuvaYuvati - Is kendra Yuva or Yuvati?",
			"Year In Which Kendra Started", "Category (Village or City Vistar)",
			"Kendra Number (Kendra number with in village or city vistar)", "Status (Active/Merged/Inactive)",
			"Year Merged - If merged since which year", "Merged to - If to which Kendra", "Sanchalak 1 - Name in Full",
			"Sanchalak 1 Contact No. (10 digit mobile number, if available)",
			"Sanchalak 1 Birthdate (in dd/mm/yyyy format, example: 31/08/1985)", "Sanchalak 2 - Name in Full",
			"Sanchalak 2 Contact No. (10 digit mobile number, if available)",
			"Sanchalak 2 Birthdate (in dd/mm/yyyy format, example: 31/08/1985)",
			"Minimum Attendance (in last 12 months)", "Maximum Attendance (in last 12 months)",
			"Yuva Kendra conducted in - Please select from - Home/ Temple/ School or College/ Classes/ Others",
			"Name of Village Or City Vistar Of Yuvakendra", "Name of Nearest Bus Stand Or Main Road (Land Mark)",
			"Yuvakendra Sthal - Complete postal Address (compulsory)", "Yuva Kendra Sthal - Pincode (compulsory)",
			"Day Of Yuvakendra - Weekday  for e.g.: Monday", "Time Of Yuvakendra - format HH:MM AM/PM, e.g. 09:00 PM",
			"Swadhyay Kendra based on Area/Village/Vistar", "Village (As Per Swadhyay Kendra)", "ProblematicRows" };

	int[] widths = { 6, 10, 15, 15, 30, 20, 20, 20, 30, 20, 20, 20, 30, 20, 20, 20, 10, 10, 10, 10, 10, 10, 10, 20, 30,
			20, 20, 30, 20, 20, 10, 20, 20, 20, 30, 80, 10, 10, 10, 20, 20, 10 };

	@Autowired
	private KendraRepository kendraRepository;

	public void createMainSheet(Workbook workbook) throws IOException, InvalidFormatException {
		Sort sort = new Sort(Direction.ASC,
				Arrays.asList("yuvaYuvati", "sanghat", "jilla", "taluka", "group", "kendraNumber"));
		List<Kendra> kendraList = kendraRepository.findAll(sort);
		CreationHelper createHelper = workbook.getCreationHelper();
		Sheet sheet = workbook.createSheet("To-Be-Updated");

		addHeaders(workbook, sheet);

		CellStyle dateCellStyle = workbook.createCellStyle();
		dateCellStyle.setDataFormat(createHelper.createDataFormat().getFormat("dd/MM/yyyy"));
		int rowNum = 1;
		for (Kendra employee : kendraList) {
			Row row = sheet.createRow(rowNum);
			addValues(dateCellStyle, employee, row, rowNum);
			rowNum++;
		}
	}

	private void addValues(CellStyle dateStyle, Kendra kendra, Row row, int rowNum) {
		int i = 0;
		row.createCell(i++).setCellValue(rowNum);
		row.createCell(i++).setCellValue(kendra.getCountry());
		row.createCell(i++).setCellValue(kendra.getSanghat());
		row.createCell(i++).setCellValue(kendra.getJilla());
		Cell dobCell;
		if (kendra.getjSannidatha() != null) {
			row.createCell(i++).setCellValue(kendra.getjSannidatha().getName());
			dobCell = row.createCell(i++);
			if (kendra.getjSannidatha().getDob() != null) {
				dobCell.setCellStyle(dateStyle);
				dobCell.setCellValue(kendra.getjSannidatha().getDob());
			}
			row.createCell(i++).setCellValue(kendra.getjSannidatha().getPhone());
		} else {
			row.createCell(i++).setCellValue("");
			row.createCell(i++).setCellValue("");
			row.createCell(i++).setCellValue("");
		}
		row.createCell(i++).setCellValue(kendra.getTaluka());
		if (kendra.gettSannidatha() != null) {
			row.createCell(i++).setCellValue(kendra.gettSannidatha().getName());
			dobCell = row.createCell(i++);
			if (kendra.gettSannidatha().getDob() != null) {
				dobCell.setCellStyle(dateStyle);
				dobCell.setCellValue(kendra.gettSannidatha().getDob());
			}
			row.createCell(i++).setCellValue(kendra.gettSannidatha().getPhone());
		} else {
			row.createCell(i++).setCellValue("");
			row.createCell(i++).setCellValue("");
			row.createCell(i++).setCellValue("");
		}
		row.createCell(i++).setCellValue(kendra.getGroup());
		if (kendra.getAvekshak() != null) {
			row.createCell(i++).setCellValue(kendra.getAvekshak().getName());
			dobCell = row.createCell(i++);
			if (kendra.getAvekshak().getDob() != null) {
				dobCell.setCellStyle(dateStyle);
				dobCell.setCellValue(kendra.getAvekshak().getDob());
			}
		} else {
			row.createCell(i++).setCellValue("");
			row.createCell(i++).setCellValue("");
			row.createCell(i++).setCellValue("");
		}
		row.createCell(i++).setCellValue(kendra.getAvekshak().getPhone());
		row.createCell(i++).setCellValue(kendra.getKendra());
		row.createCell(i++).setCellValue((kendra.getKendraType() != null) ? kendra.getKendraType().toString() : "");
		row.createCell(i++).setCellValue((kendra.getYuvaYuvati() != null) ? kendra.getYuvaYuvati().toString() : "");
		row.createCell(i++).setCellValue(kendra.getYearOfKendra());
		row.createCell(i++)
				.setCellValue((kendra.getKendraCategory() != null) ? kendra.getKendraCategory().toString() : "");
		row.createCell(i++).setCellValue(kendra.getKendraNumber());
		row.createCell(i++).setCellValue((kendra.getStatus() != null) ? kendra.getStatus().toString() : "");
		row.createCell(i++).setCellValue(kendra.getYearMerged());
		row.createCell(i++).setCellValue(kendra.getMergedTo());
		if (kendra.getSanchalak1() != null) {
			row.createCell(i++).setCellValue(kendra.getSanchalak1().getName());
			row.createCell(i++).setCellValue(kendra.getSanchalak1().getPhone());

			dobCell = row.createCell(i++);
			if (kendra.getSanchalak1().getDob() != null) {
				dobCell.setCellStyle(dateStyle);
				dobCell.setCellValue(kendra.getSanchalak1().getDob());
			}
		} else {
			row.createCell(i++).setCellValue("");
			row.createCell(i++).setCellValue("");
			row.createCell(i++).setCellValue("");
		}
		if (kendra.getSanchalak2() != null) {
			row.createCell(i++).setCellValue(kendra.getSanchalak2().getName());
			row.createCell(i++).setCellValue(kendra.getSanchalak2().getPhone());

			dobCell = row.createCell(i++);
			if (kendra.getSanchalak2().getDob() != null) {
				dobCell.setCellStyle(dateStyle);
				dobCell.setCellValue(kendra.getSanchalak2().getDob());
			}
		} else {
			row.createCell(i++).setCellValue("");
			row.createCell(i++).setCellValue("");
			row.createCell(i++).setCellValue("");
		}

		row.createCell(i++).setCellValue(kendra.getMinAttendance());
		row.createCell(i++).setCellValue(kendra.getMaxAttendance());
		row.createCell(i++).setCellValue(kendra.getYKConducted());
		row.createCell(i++).setCellValue(kendra.getVillageOfYK());
		row.createCell(i++).setCellValue(kendra.getLandmark());
		row.createCell(i++).setCellValue(kendra.getyKSthal());
		row.createCell(i++).setCellValue(kendra.getyKSthalPin());
		row.createCell(i++).setCellValue(kendra.getDayOfYK());
		row.createCell(i++).setCellValue(kendra.getTimeOfYK());
		row.createCell(i++).setCellValue(kendra.getSwadhyayLoc());
		row.createCell(i++).setCellValue(kendra.getSwadhyayVillage());

	}

	private void addHeaders(Workbook workbook, Sheet sheet) {
		Font headerFont = workbook.createFont();
		headerFont.setBoldweight(Font.BOLDWEIGHT_BOLD);
		headerFont.setUnderline(Font.U_SINGLE);
		headerFont.setFontHeightInPoints((short) 11);
		headerFont.setColor(IndexedColors.DARK_BLUE.getIndex());
		CellStyle headerCellStyle = workbook.createCellStyle();
		headerCellStyle.setFont(headerFont);
		headerCellStyle.setWrapText(true);
		Row headerRow = sheet.createRow(0);
		headerRow.setHeightInPoints((short) 120);
		for (int i = 0; i < columnHeadings.length; i++) {
			sheet.setColumnWidth(i, widths[i] * 256);
			Cell cell = headerRow.createCell(i);
			cell.setCellValue(columnHeadings[i]);
			cell.setCellStyle(headerCellStyle);
		}
	}
}
