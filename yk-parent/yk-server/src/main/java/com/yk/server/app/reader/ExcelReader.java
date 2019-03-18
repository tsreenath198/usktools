package com.yk.server.app.reader;

import java.text.ParseException;
import java.util.Date;
import java.util.Set;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;

import com.yk.server.app.util.DateUtil;

public abstract class ExcelReader<T> {
	public abstract Set<T> read(String filePath) throws Exception;

	private static final String[] DATE_FORMATS = { "dd-MMM-yyyy", "dd-MM-yyyy", "dd-MM-yy", "dd/MM/yyyy", "dd/MM/yy",
			"MM/dd/yyyy", "MM/dd/yy" };

	public String getCellValue(Row row, int col) {
		Cell cell = row.getCell(col);
		if (cell == null) {
			// System.err.println("empty value in row : " + (row.getRowNum() + 1) + " in col
			// " + (col + 1));
			return "";
		}
		Object val = null;

		switch (cell.getCellType()) {
		case Cell.CELL_TYPE_STRING:
			val = cell.getStringCellValue();
			break;
		case Cell.CELL_TYPE_NUMERIC:
			val = cell.getNumericCellValue();
			if (val != null) {
				val = String.format("%.0f", val);
			}
			break;
		case Cell.CELL_TYPE_BOOLEAN:
			val = cell.getBooleanCellValue();
			break;
		default:
		}
		if (val != null) {
			return val.toString();
		} else {
			return "";
		}
	}

	public Date getDateValue(Row row, int col) throws Exception {
		Cell cell = row.getCell(col);
		if (cell != null) {
			String dob = cell.toString();
			for (String format : DATE_FORMATS) {
				try {
					Date val = DateUtil.parse(dob, format);
					return val;
				} catch (ParseException e) {
				}
			}
			throw new Exception(dob);
		}
		return null;
	}
}
