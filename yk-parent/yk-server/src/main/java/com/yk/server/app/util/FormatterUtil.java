package com.yk.server.app.util;

import org.springframework.util.StringUtils;

public class FormatterUtil {
	public static String format(String value) {
		if (StringUtils.isEmpty(value)) {
			return "";
		} else if (value.length() == 1) {
			return value.toUpperCase();
		} else {
			return capitailizeWord(value);
		}
	}

	public static String capitailizeWord(String str) {
		StringBuffer s = new StringBuffer();
		char ch = ' ';
		for (int i = 0; i < str.length(); i++) {
			if (ch == ' ' && str.charAt(i) != ' ')
				s.append(Character.toUpperCase(str.charAt(i)));
			else
				s.append(str.charAt(i));
			ch = str.charAt(i);
		}
		return s.toString().trim();
	}
}
