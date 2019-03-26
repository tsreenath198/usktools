package com.yk.server.app.validation;

import java.util.List;

import org.springframework.util.StringUtils;

public class DataValidator {
	protected void checkNotNull(String key, Object value, List<String> errors) {
		if (value == null) {
			errors.add(key + " : null");
		} else if (StringUtils.isEmpty(value.toString())) {
			errors.add("invalid " + key + ":" + value);
		}
	}
}
