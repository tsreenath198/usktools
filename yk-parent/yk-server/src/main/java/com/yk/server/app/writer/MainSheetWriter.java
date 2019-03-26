package com.yk.server.app.writer;

import java.io.IOException;
import java.util.Arrays;
import java.util.Date;
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
import org.springframework.util.StringUtils;

import com.yk.server.app.model.Kendra;
import com.yk.server.app.model.Role;
import com.yk.server.app.model.Yuva;
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
		Sort sort = new Sort(Direction.ASC, Arrays.asList("orderNo"));
		List<Kendra> kendraList = kendraRepository.findAll(sort);
		CreationHelper createHelper = workbook.getCreationHelper();
		Sheet sheet = workbook.createSheet("To-Be-Updated");

		addHeaders(workbook, sheet);

		CellStyle dateCellStyle = workbook.createCellStyle();
		dateCellStyle.setDataFormat(createHelper.createDataFormat().getFormat("dd/MM/yyyy"));

		CellStyle blankCellStyle = workbook.createCellStyle();
		blankCellStyle.setFillForegroundColor(IndexedColors.YELLOW.getIndex());
		blankCellStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);
		int rowNum = 1;
		for (Kendra kendra : kendraList) {
			Row row = sheet.createRow(rowNum);
			addValues(dateCellStyle, blankCellStyle, kendra, row, rowNum);
			rowNum++;
		}
	}

	private void addValues(CellStyle dateStyle, CellStyle blankCellStyle, Kendra kendra, Row row, int rowNum) {
		int i = 0;
		writeCell(row, i++, blankCellStyle, rowNum);
		writeCell(row, i++, blankCellStyle, kendra.getCountry());
		writeCell(row, i++, blankCellStyle, kendra.getSanghat());
		writeCell(row, i++, blankCellStyle, kendra.getJilla());
		i = writePerson(kendra.getjSannidatha(), i, row, blankCellStyle, dateStyle);
		writeCell(row, i++, blankCellStyle, kendra.getTaluka());
		i = writePerson(kendra.gettSannidatha(), i, row, blankCellStyle, dateStyle);
		writeCell(row, i++, blankCellStyle, kendra.getGroup());
		i = writePerson(kendra.getAvekshak(), i, row, blankCellStyle, dateStyle);
		writeCell(row, i++, blankCellStyle, kendra.getKendra());
		writeCell(row, i++, blankCellStyle, (kendra.getKendraType() != null) ? kendra.getKendraType().toString() : "");
		writeCell(row, i++, blankCellStyle, (kendra.getYuvaYuvati() != null) ? kendra.getYuvaYuvati().toString() : "");
		writeCell(row, i++, blankCellStyle, kendra.getYearOfKendra());
		writeCell(row, i++, blankCellStyle, kendra.getKendraCategory());
		writeCell(row, i++, blankCellStyle, kendra.getKendraNumber());
		writeCell(row, i++, blankCellStyle, kendra.getStatus());
		writeCell(row, i++, blankCellStyle, kendra.getYearMerged());
		writeCell(row, i++, blankCellStyle, kendra.getMergedTo());
		i = writePerson(kendra.getSanchalak1(), i, row, blankCellStyle, dateStyle);
		i = writePerson(kendra.getSanchalak2(), i, row, blankCellStyle, dateStyle);
		writeCell(row, i++, blankCellStyle, kendra.getMinAttendance());
		writeCell(row, i++, blankCellStyle, kendra.getMaxAttendance());
		writeCell(row, i++, blankCellStyle, kendra.getYKConducted());
		writeCell(row, i++, blankCellStyle, kendra.getVillageOfYK());
		writeCell(row, i++, blankCellStyle, kendra.getLandmark());
		writeCell(row, i++, blankCellStyle, kendra.getyKSthal());
		writeCell(row, i++, blankCellStyle, kendra.getyKSthalPin());
		writeCell(row, i++, blankCellStyle, kendra.getDayOfYK());
		writeCell(row, i++, blankCellStyle, kendra.getTimeOfYK());
		writeCell(row, i++, blankCellStyle, kendra.getSwadhyayLoc());
		writeCell(row, i++, blankCellStyle, kendra.getSwadhyayVillage());

	}

	private int writePerson(Yuva yuva, int i, Row row, CellStyle blankCellStyle, CellStyle dateStyle) {
		if (yuva != null) {
			writeNameCell(row, i++, blankCellStyle, yuva.getName());
			if (!(Role.J_SANNIDATHA.getRole().equalsIgnoreCase(yuva.getRole())
					|| Role.T_SANNIDATHA.getRole().equalsIgnoreCase(yuva.getRole()))) {
				writeCell(row, i++, blankCellStyle, yuva.getPhone());
			}
			if (yuva.getDob() != null) {
				writeCell(row, i++, yuva.getDob(), dateStyle);
			} else {
				writeBlank(row, i++, blankCellStyle);
			}
			if (Role.J_SANNIDATHA.getRole().equalsIgnoreCase(yuva.getRole())
					|| Role.T_SANNIDATHA.getRole().equalsIgnoreCase(yuva.getRole())) {
				writeCell(row, i++, blankCellStyle, yuva.getPhone());
			}
		} else {
			writeCell(row, i++, blankCellStyle, "N/A");
			writeCell(row, i++, blankCellStyle, "N/A");
			writeCell(row, i++, blankCellStyle, "N/A");
		}
		return i;
	}

	private void writeNameCell(Row row, int i, CellStyle blankCellStyle, String name) {
		if (name != null) {
			if (name.split(" ").length >= 3) {
				writeCell(row, i, blankCellStyle, name);
			} else {
				Cell errorCell = row.createCell(i);
				errorCell.setCellStyle(blankCellStyle);
				errorCell.setCellValue(name);
			}
		} else {
			writeBlank(row, i, blankCellStyle);
		}

	}

	private void writeBlank(Row row, int i, CellStyle blankCellStyle) {
		Cell blankCell = row.createCell(i);
		blankCell.setCellStyle(blankCellStyle);
		blankCell.setCellValue("");

	}

	private void writeCell(Row row, int i, Date dt, CellStyle dateStyle) {
		Cell dateCell = row.createCell(i);
		dateCell.setCellStyle(dateStyle);
		dateCell.setCellValue(dt);
	}

	private void writeCell(Row row, int i, CellStyle blankCellStyle, Enum<?> e) {
		if (e != null) {
			row.createCell(i).setCellValue(e.toString());
		} else {
			writeBlank(row, i, blankCellStyle);
		}
	}

	private void writeCell(Row row, int i, CellStyle blankCellStyle, String value) {
		if (StringUtils.isEmpty(value)) {
			writeBlank(row, i, blankCellStyle);
		} else {
			row.createCell(i).setCellValue(value);
		}
	}

	private void writeCell(Row row, int i, CellStyle blankCellStyle, int value) {
		row.createCell(i).setCellValue(value);
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
