package com.yk.server.app.validation;

import java.util.List;

import org.springframework.util.StringUtils;

public class DataValidator {
	protected void checkNotNull(String key, String value, List<String> errors) {
		if (!StringUtils.hasText(value) || "N/A".equalsIgnoreCase(value) || "NA".equalsIgnoreCase(value) ) {
			errors.add(key + " : null");
		}
	}
}
