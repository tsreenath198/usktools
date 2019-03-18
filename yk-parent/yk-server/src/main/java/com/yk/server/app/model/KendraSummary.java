package com.yk.server.app.model;

public class KendraSummary {
	private String sanghat;
	private String jilla;
	private String taluka;
	private int jillaCount;
	private int jsannidathaCount;
	private int talukaCount;
	private int talukaSannidathCount;
	private int yuvaGroupCount;
	private int yuvaAvekshakCount;
	private int yuvatiGroupCount;
	private int yuvatiAvekshakCount;
	private int yuvaKendraCount;
	private int yuvaDPCCount;
	private int yuvaSanchalakCount;
	private int yuvatiKendraCount;
	private int yuvatiDPCCount;
	private int yuvatiSanchalakCount;
	private int nonActiveKendraCount;
	private int totalKendraCount;
	private int totalDPCCount;

	public KendraSummary(String sanghat, String jilla, String taluka) {
		this.sanghat = sanghat;
		this.jilla = jilla;
		this.taluka = taluka;
	}

	public String getSanghat() {
		return sanghat;
	}

	public void setSanghat(String sanghat) {
		this.sanghat = sanghat;
	}

	public String getJilla() {
		return jilla;
	}

	public void setJilla(String jilla) {
		this.jilla = jilla;
	}

	public String getTaluka() {
		return taluka;
	}

	public void setTaluka(String taluka) {
		this.taluka = taluka;
	}

	public int getJillaCount() {
		return jillaCount;
	}

	public void setJillaCount(int jillaCount) {
		this.jillaCount = jillaCount;
	}

	public int getJsannidathaCount() {
		return jsannidathaCount;
	}

	public void setJsannidathaCount(int jsannidathaCount) {
		this.jsannidathaCount = jsannidathaCount;
	}

	public int getTalukaCount() {
		return talukaCount;
	}

	public void setTalukaCount(int talukaCount) {
		this.talukaCount = talukaCount;
	}

	public int getTalukaSannidathCount() {
		return talukaSannidathCount;
	}

	public void setTalukaSannidathCount(int talukaSannidathCount) {
		this.talukaSannidathCount = talukaSannidathCount;
	}

	public int getYuvaGroupCount() {
		return yuvaGroupCount;
	}

	public void setYuvaGroupCount(int yuvaGroupCount) {
		this.yuvaGroupCount = yuvaGroupCount;
	}

	public int getYuvaAvekshakCount() {
		return yuvaAvekshakCount;
	}

	public void setYuvaAvekshakCount(int yuvaAvekshakCount) {
		this.yuvaAvekshakCount = yuvaAvekshakCount;
	}

	public int getYuvatiGroupCount() {
		return yuvatiGroupCount;
	}

	public void setYuvatiGroupCount(int yuvatiGroupCount) {
		this.yuvatiGroupCount = yuvatiGroupCount;
	}

	public int getYuvatiAvekshakCount() {
		return yuvatiAvekshakCount;
	}

	public void setYuvatiAvekshakCount(int yuvatiAvekshakCount) {
		this.yuvatiAvekshakCount = yuvatiAvekshakCount;
	}

	public int getYuvaKendraCount() {
		return yuvaKendraCount;
	}

	public void setYuvaKendraCount(int yuvaKendraCount) {
		this.yuvaKendraCount = yuvaKendraCount;
	}

	public int getYuvaDPCCount() {
		return yuvaDPCCount;
	}

	public void setYuvaDPCCount(int yuvaDPCCount) {
		this.yuvaDPCCount = yuvaDPCCount;
	}

	public int getYuvaSanchalakCount() {
		return yuvaSanchalakCount;
	}

	public void setYuvaSanchalakCount(int yuvaSanchalakCount) {
		this.yuvaSanchalakCount = yuvaSanchalakCount;
	}

	public int getYuvatiKendraCount() {
		return yuvatiKendraCount;
	}

	public void setYuvatiKendraCount(int yuvatiKendraCount) {
		this.yuvatiKendraCount = yuvatiKendraCount;
	}

	public int getYuvatiDPCCount() {
		return yuvatiDPCCount;
	}

	public void setYuvatiDPCCount(int yuvatiDPCCount) {
		this.yuvatiDPCCount = yuvatiDPCCount;
	}

	public int getYuvatiSanchalakCount() {
		return yuvatiSanchalakCount;
	}

	public void setYuvatiSanchalakCount(int yuvatiSanchalakCount) {
		this.yuvatiSanchalakCount = yuvatiSanchalakCount;
	}

	public int getNonActiveKendraCount() {
		return nonActiveKendraCount;
	}

	public void setNonActiveKendraCount(int nonActiveKendraCount) {
		this.nonActiveKendraCount = nonActiveKendraCount;
	}

	public int getTotalKendraCount() {
		return totalKendraCount;
	}

	public void setTotalKendraCount(int totalKendraCount) {
		this.totalKendraCount = totalKendraCount;
	}

	public int getTotalDPCCount() {
		return totalDPCCount;
	}

	public void setTotalDPCCount(int totalDPCCount) {
		this.totalDPCCount = totalDPCCount;
	}

	public void addJillaCount(int jillaCount) {
		this.jillaCount += jillaCount;
	}

	public void addJsannidathaCount(int jsannidathaCount) {
		this.jsannidathaCount += jsannidathaCount;
	}

	public void addTalukaCount(int talukaCount) {
		this.talukaCount += talukaCount;
	}

	public void addTalukaSannidathCount(int talukaSannidathCount) {
		this.talukaSannidathCount += talukaSannidathCount;
	}

	public void addYuvaGroupCount(int yuvaGroupCount) {
		this.yuvaGroupCount += yuvaGroupCount;
	}

	public void addYuvaAvekshakCount(int yuvaAvekshakCount) {
		this.yuvaAvekshakCount += yuvaAvekshakCount;
	}

	public void addYuvatiGroupCount(int yuvatiGroupCount) {
		this.yuvatiGroupCount += yuvatiGroupCount;
	}

	public void addYuvatiAvekshakCount(int yuvatiAvekshakCount) {
		this.yuvatiAvekshakCount += yuvatiAvekshakCount;
	}

	public void addYuvaKendraCount(int yuvaKendraCount) {
		this.yuvaKendraCount += yuvaKendraCount;
	}

	public void addYuvaDPCCount(int yuvaDPCCount) {
		this.yuvaDPCCount += yuvaDPCCount;
	}

	public void addYuvaSanchalakCount(int yuvaSanchalakCount) {
		this.yuvaSanchalakCount += yuvaSanchalakCount;
	}

	public void addYuvatiKendraCount(int yuvatiKendraCount) {
		this.yuvatiKendraCount += yuvatiKendraCount;
	}

	public void addYuvatiDPCCount(int yuvatiDPCCount) {
		this.yuvatiDPCCount += yuvatiDPCCount;
	}

	public void addYuvatiSanchalakCount(int yuvatiSanchalakCount) {
		this.yuvatiSanchalakCount += yuvatiSanchalakCount;
	}

	public void addNonActiveKendraCount(int nonActiveKendraCount) {
		this.nonActiveKendraCount += nonActiveKendraCount;
	}

	public void addTotalKendraCount(int totalKendraCount) {
		this.totalKendraCount += totalKendraCount;
	}

	public void addTotalDPCCount(int totalDPCCount) {
		this.totalDPCCount += totalDPCCount;
	}

	@Override
	public String toString() {
		return "KendraSummary [sanghat=" + sanghat + ", jilla=" + jilla + ", taluka=" + taluka + ", jillaCount="
				+ jillaCount + ", jsannidathaCount=" + jsannidathaCount + ", talukaCount=" + talukaCount
				+ ", talukaSannidathCount=" + talukaSannidathCount + ", yuvaGroupCount=" + yuvaGroupCount
				+ ", yuvaAvekshakCount=" + yuvaAvekshakCount + ", yuvatiGroupCount=" + yuvatiGroupCount
				+ ", yuvatiAvekshakCount=" + yuvatiAvekshakCount + ", yuvaKendraCount=" + yuvaKendraCount
				+ ", yuvaDPCCount=" + yuvaDPCCount + ", yuvaSanchalakCount=" + yuvaSanchalakCount
				+ ", yuvatiKendraCount=" + yuvatiKendraCount + ", yuvatiDPCCount=" + yuvatiDPCCount
				+ ", yuvatiSanchalakCount=" + yuvatiSanchalakCount + ", nonActiveKendraCount=" + nonActiveKendraCount
				+ ", totalKendraCount=" + totalKendraCount + ", totalDPCCount=" + totalDPCCount + "]";
	}

}
