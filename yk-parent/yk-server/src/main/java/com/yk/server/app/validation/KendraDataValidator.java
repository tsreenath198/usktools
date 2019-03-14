package com.yk.server.app.validation;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.yk.server.app.model.Kendra;

@Component
public class KendraDataValidator extends DataValidator {

	@Autowired
	YuvaValidator yuvaValidator;
	List<String> yuvaTypes = Arrays.asList("Yuva", "Yuvati");
	List<String> kendraTypes = Arrays.asList("Yuva Kendra", "DPC");
	List<String> kendraStatuses = Arrays.asList("Active", "Inactive", "Merged");

	public List<String> validate(Kendra kendra) {
		List<String> errors = new ArrayList<String>();
		yuvaValidator.checkYuva(kendra.getjSannidatha(), errors);
		yuvaValidator.checkYuva(kendra.gettSannidatha(), errors);
		yuvaValidator.checkYuva(kendra.getAvekshak(), errors);
		yuvaValidator.checkYuva(kendra.getSanchalak1(), errors);
		yuvaValidator.checkYuva(kendra.getSanchalak2(), errors);
		checkNotNull("country", kendra.getCountry(), errors);
		checkNotNull("sanghat", kendra.getSanghat(), errors);
		checkNotNull("Jilla", kendra.getSanghat(), errors);
		checkNotNull("Kendra", kendra.getKendra(), errors);
		checkNotNull("Group", kendra.getGroup(), errors);
		checkNotNull("Taluka", kendra.getTaluka(), errors);

		checkKendraStatus(kendra.getStatus(), errors);
		checkKendraType(kendra.getKendraType(), errors);
		checkYuvaType(kendra.getYuvaYuvati(), errors);
		return errors;
	}

	private void checkYuvaType(String kendraYuvati, List<String> errors) {
		if (!yuvaTypes.contains(kendraYuvati)) {
			errors.add("YuvaYuvatiType must be : " + yuvaTypes);
		}
	}

	private void checkKendraType(String kendraType, List<String> errors) {
		if (!kendraTypes.contains(kendraType)) {
			errors.add("kendraType must be : " + kendraTypes);
		}
	}

	private void checkKendraStatus(String status, List<String> errors) {
		if (!kendraStatuses.contains(status)) {
			errors.add("Actual : " + status + "status must be : " + kendraStatuses);
		}
	}

}
