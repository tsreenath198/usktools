package com.yk.server.app.validation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yk.server.app.model.Yuva;

@Component
public class YuvaValidator extends DataValidator {

	public List<String> checkYuva(Yuva yuva) {
		List<String> errors = new ArrayList<>();
		checkYuva(yuva, errors);
		return errors;
	}

	public void checkYuva(Yuva yuva, List<String> errors) {
		if (yuva == null) {
			return;
		}
		checkName(yuva.getRole(), yuva.getName(), errors);
		checkPhone(yuva.getRole(), yuva.getPhone(), errors);
	}

	private void checkName(String role, String name, List<String> errors) {
		String[] namesArr = name.split(" ");
		if (namesArr.length < 3) {
			errors.add(role + " Name : " + name);
		}
	}

	private String checkPhone(String role, String phone, List<String> errors) {
		/*if (phone == null || phone.length() < 10) {
			errors.add(role + " Phone : " + phone);
		}*/
		phone = phone.replaceAll(" ", "");
		if (phone.length() != 10) {
			errors.add(role + " Phone : " + phone);
		}
		return phone;
	}
}
