package com.yk.server.app;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.yk.server.app.model.KendraSummary;
import com.yk.server.app.repository.KendraRepository;

@Component
public class SummaryWriter {

	@Autowired
	private KendraRepository kr;

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

	private void populateBySanghatJillaAndTaluka(KendraSummary kendraSummary, String s, String j, String t) {
		kendraSummary.setJillaCount(1);
		kendraSummary.setTalukaCount(1);

	}

	private void populateBySanghatAndJilla(KendraSummary kendraSummary, String s, String j) {
		kendraSummary.setJillaCount(1);
	}

	private void populateBySanghat(KendraSummary k, String s) {
		k.setJillaCount(kr.countJillas(s));
		k.setJsannidathaCount(kr.countjSannidathas(s));
		k.setTalukaCount(kr.countTalukas(s));
		k.setTalukaSannidathCount(kr.counttSannidathas(s));
		k.setYuvaGroupCount(kr.countYuvaGroups(s));
		k.setYuvatiGroupCount(kr.countYuvatiGroups(s));
		k.setYuvaAvekshakCount(kr.countYuvaAvekshaks(s));
		k.setYuvatiAvekshakCount(kr.countYuvatiAvekshaks(s));
		k.setYuvaKendraCount(kr.countYuvaKendrasYK(s));
		k.setYuvaDPCCount(kr.countYuvaKendrasDPC(s));
		k.setYuvaSanchalakCount(kr.countYuvaSanchalaks(s));
		k.setYuvatiKendraCount(kr.countYuvatiKendrasYK(s));
		k.setYuvatiDPCCount(kr.countYuvatiKendrasDPC(s));
		k.setYuvatiSanchalakCount(kr.countYuvatiSanchalaks(s));
		k.setNonActiveKendraCount(kr.countInActive(s));
		k.setTotalKendraCount(kr.countKendrasYK(s));
		k.setTotalDPCCount(kr.countKendrasDPC(s));
	}

}
