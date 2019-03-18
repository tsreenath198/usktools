package com.yk.server.app.validation;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.yk.server.app.model.Kendra;
import com.yk.server.app.model.KendraStatus;
import com.yk.server.app.model.KendraType;
import com.yk.server.app.model.YuvaYuvati;

@Component
public class KendraDataValidator extends DataValidator {

	@Autowired
	YuvaValidator yuvaValidator;
	List<String> yuvaTypes = Arrays.asList("Yuva", "Yuvati");
	List<String> kendraTypes = Arrays.asList("Yuva Kendra", "DPC");
	List<String> kendraStatuses = Arrays.asList("Active", "Inactive", "Merged");

	public List<String> validate(Kendra kendra) {
		List<String> errors = new ArrayList<String>();
		if (YuvaYuvati.YUVA.equals(kendra.getYuvaYuvati())) {
			yuvaValidator.checkYuva(kendra.getjSannidatha(), errors);
			yuvaValidator.checkYuva(kendra.gettSannidatha(), errors);
		}
		yuvaValidator.checkYuva(kendra.getAvekshak(), errors);
		yuvaValidator.checkYuva(kendra.getSanchalak1(), errors);
		yuvaValidator.checkYuva(kendra.getSanchalak2(), errors);
		checkNotNull("country", kendra.getCountry(), errors);
		checkNotNull("sanghat", kendra.getSanghat(), errors);
		checkNotNull("Jilla", kendra.getSanghat(), errors);
		checkNotNull("Kendra", kendra.getKendra(), errors);
		checkNotNull("Group", kendra.getGroup(), errors);
		checkNotNull("Taluka", kendra.getTaluka(), errors);

		checkNotNull("Status", kendra.getStatus(), errors);
		checkNotNull("Kendra Type", kendra.getKendraType(), errors);
		checkNotNull("Yuva_Yuvati", kendra.getYuvaYuvati(), errors);
		return errors;
	}
}
