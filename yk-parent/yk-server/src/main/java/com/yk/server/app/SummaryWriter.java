package com.yk.server.app;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

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
import org.springframework.stereotype.Component;

import com.yk.server.app.model.KendraSummary;
import com.yk.server.app.repository.KendraRepository;

@Component
public class SummaryWriter {

	@Autowired
	private KendraRepository kr;
	private String[] columnHeadings = { "Sanghat", "Jilla", "Taluka", "Jillas", "Jilla Sannidhata", "Taluka",
			"Taluka Sannidhata", "Yuva_ Groups", "Yuva_ Avekshak", "Yuvati_ Groups", "Yuvati_ Avekshak", "Yuva_ Kendra",
			"Yuva _DPC", "Yuva_ Sanchalak", "Yuvati _Kendra", "Yuvati_ DPC", "Yuvati _Sanchalak",
			"NonActive_ NonMerged_ Kendra", "Total_ Kendra", "Total_ DPC" };
	int[] widths = { 15, 15, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 };

	public void createSummarySheet(Workbook workbook) throws IOException, InvalidFormatException {
		List<KendraSummary> kendraList = getSummary();
		CreationHelper createHelper = workbook.getCreationHelper();
		Sheet sheet = workbook.createSheet("Summary (For Verification)");

		addHeaders(workbook, sheet);

		CellStyle dateCellStyle = workbook.createCellStyle();
		dateCellStyle.setDataFormat(createHelper.createDataFormat().getFormat("dd/MM/yyyy"));
		int rowNum = 1;
		for (KendraSummary employee : kendraList) {
			Row row = sheet.createRow(rowNum);
			addValues(dateCellStyle, employee, row, rowNum);
			rowNum++;
		}
	}

	private void addValues(CellStyle dateStyle, KendraSummary kendra, Row row, int rowNum) {
		int i = 0;
		row.createCell(i++).setCellValue(kendra.getSanghat());
		row.createCell(i++).setCellValue(kendra.getJilla());
		row.createCell(i++).setCellValue(kendra.getTaluka());
		row.createCell(i++).setCellValue(kendra.getJillaCount());
		row.createCell(i++).setCellValue(kendra.getJsannidathaCount());
		row.createCell(i++).setCellValue(kendra.getTalukaCount());
		row.createCell(i++).setCellValue(kendra.getTalukaSannidathCount());
		row.createCell(i++).setCellValue(kendra.getYuvaGroupCount());
		row.createCell(i++).setCellValue(kendra.getYuvaAvekshakCount());
		row.createCell(i++).setCellValue(kendra.getYuvatiGroupCount());
		row.createCell(i++).setCellValue(kendra.getYuvatiAvekshakCount());
		row.createCell(i++).setCellValue(kendra.getYuvaKendraCount());
		row.createCell(i++).setCellValue(kendra.getYuvaDPCCount());
		row.createCell(i++).setCellValue(kendra.getYuvaSanchalakCount());
		row.createCell(i++).setCellValue(kendra.getYuvatiKendraCount());
		row.createCell(i++).setCellValue(kendra.getYuvatiDPCCount());
		row.createCell(i++).setCellValue(kendra.getYuvatiSanchalakCount());
		row.createCell(i++).setCellValue(kendra.getNonActiveKendraCount());
		row.createCell(i++).setCellValue(kendra.getTotalKendraCount());
		row.createCell(i++).setCellValue(kendra.getTotalDPCCount());
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

	public List<KendraSummary> getSummary() {
		List<KendraSummary> summaryList = new ArrayList<>();
		Set<String> sanghats = kr.getAllSanghats();
		Set<String> jillas, talukas;
		for (String sanghat : sanghats) {
			addSummary(sanghat, "All", "All", summaryList);
			jillas = kr.getAllJillas(sanghat);
			for (String jilla : jillas) {
				addSummary(sanghat, jilla, "All", summaryList);
				talukas = kr.getAllTalukas(sanghat, jilla);
				for (String taluka : talukas) {
					addSummary(sanghat, jilla, taluka, summaryList);
				}
			}
		}
		return summaryList;
	}

	private void addSummary(String s, String j, String t, List<KendraSummary> summaryList) {
		KendraSummary kendraSummary = new KendraSummary(s, j, t);
		populateSummary(kendraSummary);
		summaryList.add(kendraSummary);
		System.out.println(kendraSummary);
	}

	private void populateSummary(KendraSummary kendraSummary) {
		String s = kendraSummary.getSanghat();
		String j = kendraSummary.getJilla();
		String t = kendraSummary.getTaluka();
		if ("All".equalsIgnoreCase(j) && "All".equalsIgnoreCase(t)) {
			populateBySanghat(kendraSummary, s);
		} else if ("All".equalsIgnoreCase(t)) {
			populateBySanghatAndJilla(kendraSummary, s, j);
		} else {
			populateBySanghatJillaAndTaluka(kendraSummary, s, j, t);
		}
	}

	private void populateBySanghatJillaAndTaluka(KendraSummary k, String s, String j, String t) {
		k.setJillaCount(1);
		k.setTalukaCount(1);
		k.setJsannidathaCount(kr.countjSannidathas(s, j, t));
		k.setTalukaSannidathCount(kr.counttSannidathas(s, j, t));
		k.setYuvaGroupCount(kr.countYuvaGroups(s, j, t));
		k.setYuvatiGroupCount(kr.countYuvatiGroups(s, j, t));
		k.setYuvaAvekshakCount(kr.countYuvaAvekshaks(s, j, t));
		k.setYuvatiAvekshakCount(kr.countYuvatiAvekshaks(s, j, t));
		k.setYuvaKendraCount(kr.countYuvaKendrasYK(s, j, t));
		k.setYuvaDPCCount(kr.countYuvaKendrasDPC(s, j, t));
		k.setYuvaSanchalakCount(kr.countYuvaSanchalaks1(s, j, t) + kr.countYuvaSanchalaks2(s, j, t));
		k.setYuvatiKendraCount(kr.countYuvatiKendrasYK(s, j, t));
		k.setYuvatiDPCCount(kr.countYuvatiKendrasDPC(s, j, t));
		k.setYuvatiSanchalakCount(kr.countYuvatiSanchalaks1(s, j, t) + kr.countYuvatiSanchalaks2(s, j, t));
		k.setNonActiveKendraCount(kr.countInActive(s, j, t));
		k.setTotalKendraCount(kr.countKendrasYK(s, j, t));
		k.setTotalDPCCount(kr.countKendrasDPC(s, j, t));

	}

	private void populateBySanghatAndJilla(KendraSummary k, String s, String j) {
		k.setJillaCount(1);
		k.setTalukaCount(kr.countTalukas(s, j));
		k.setJsannidathaCount(kr.countjSannidathas(s, j));
		k.setTalukaSannidathCount(kr.counttSannidathas(s, j));
		k.setYuvaGroupCount(kr.countYuvaGroups(s, j));
		k.setYuvatiGroupCount(kr.countYuvatiGroups(s, j));
		k.setYuvaAvekshakCount(kr.countYuvaAvekshaks(s, j));
		k.setYuvatiAvekshakCount(kr.countYuvatiAvekshaks(s, j));
		k.setYuvaKendraCount(kr.countYuvaKendrasYK(s, j));
		k.setYuvaDPCCount(kr.countYuvaKendrasDPC(s, j));
		k.setYuvaSanchalakCount(kr.countYuvaSanchalaks1(s, j) + kr.countYuvaSanchalaks2(s, j));
		k.setYuvatiKendraCount(kr.countYuvatiKendrasYK(s, j));
		k.setYuvatiDPCCount(kr.countYuvatiKendrasDPC(s, j));
		k.setYuvatiSanchalakCount(kr.countYuvatiSanchalaks1(s, j) + kr.countYuvatiSanchalaks2(s, j));
		k.setNonActiveKendraCount(kr.countInActive(s, j));
		k.setTotalKendraCount(kr.countKendrasYK(s, j));
		k.setTotalDPCCount(kr.countKendrasDPC(s, j));
	}

	private void populateBySanghat(KendraSummary k, String s) {
		k.setJillaCount(kr.countJillas(s));
		k.setTalukaCount(kr.countTalukas(s));
		k.setJsannidathaCount(kr.countjSannidathas(s));
		k.setTalukaSannidathCount(kr.counttSannidathas(s));
		k.setYuvaGroupCount(kr.countYuvaGroups(s));
		k.setYuvatiGroupCount(kr.countYuvatiGroups(s));
		k.setYuvaAvekshakCount(kr.countYuvaAvekshaks(s));
		k.setYuvatiAvekshakCount(kr.countYuvatiAvekshaks(s));
		k.setYuvaKendraCount(kr.countYuvaKendrasYK(s));
		k.setYuvaDPCCount(kr.countYuvaKendrasDPC(s));
		k.setYuvaSanchalakCount(kr.countYuvaSanchalaks1(s) + kr.countYuvaSanchalaks2(s));
		k.setYuvatiKendraCount(kr.countYuvatiKendrasYK(s));
		k.setYuvatiDPCCount(kr.countYuvatiKendrasDPC(s));
		k.setYuvatiSanchalakCount(kr.countYuvatiSanchalaks1(s) + kr.countYuvatiSanchalaks2(s));
		k.setNonActiveKendraCount(kr.countInActive(s));
		k.setTotalKendraCount(kr.countKendrasYK(s));
		k.setTotalDPCCount(kr.countKendrasDPC(s));
	}

}
