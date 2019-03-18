package com.yk.server.app.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.yk.server.app.util.FormatterUtil;
import com.yk.server.app.util.Role;

@Entity
@Table(name = "kendra", uniqueConstraints = {
		@UniqueConstraint(columnNames = { "sanghat", "jilla", "taluka", "patti", "kendra", "yuva_yuvati" }) })
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Kendra {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "country")
	private String country;
	@Column(name = "sanghat")
	private String sanghat;
	@Column(name = "jilla")
	private String jilla;
	@Column(name = "taluka")
	private String taluka;
	@Column(name = "patti")
	private String group;
	@Column(name = "kendra")
	private String kendra;

	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "jsann_id")
	private Yuva jSannidatha = new Yuva(Role.J_SANNIDATHA);

	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "tsann_id")
	private Yuva tSannidatha = new Yuva(Role.T_SANNIDATHA);

	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "avekshak_id")
	private Yuva avekshak = new Yuva(Role.AVEKSHAK);;

	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "sanchalak1_id")
	private Yuva sanchalak1 = new Yuva(Role.SANCHALAK_1);

	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "sanchalak2_id")
	private Yuva sanchalak2 = new Yuva(Role.SANCHALAK_2);

	@Column(name = "kendra_type")
	@Enumerated(EnumType.STRING)
	private KendraType kendraType;
	@Column(name = "yuva_yuvati")
	@Enumerated(EnumType.STRING)
	private YuvaYuvati yuvaYuvati;
	@Column(name = "year_of_kendra")
	private String yearOfKendra;
	@Column(name = "category")
	@Enumerated(EnumType.STRING)
	private KendraCategory category;
	@Column(name = "kendra_number")
	private String kendraNumber;
	@Column(name = "status")
	@Enumerated(EnumType.STRING)
	private KendraStatus status;
	@Column(name = "year_merged")
	private String yearMerged;
	@Column(name = "merged_to")
	private String mergedTo;

	@Column(name = "min_attendance")
	private String minAttendance;
	@Column(name = "max_attendance")
	private String maxAttendance;
	@Column(name = "yk_conducted")
	private String YKConducted;
	@Column(name = "village_of_yk")
	private String villageOfYK;
	@Column(name = "landmark")
	private String landmark;
	@Column(name = "yK_sthal")
	private String yKSthal;
	@Column(name = "yK_sthal_pin")
	private String yKSthalPin;
	@Column(name = "day_of_yk")
	private String dayOfYK;
	@Column(name = "time_of_yk")
	private String timeOfYK;
	@Column(name = "swadhyay_loc")
	private String swadhyayLoc;
	@Column(name = "swadhyay_village")
	private String swadhyayVillage;

	@Column(name = "errors")
	private String errors;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = FormatterUtil.format(country);
	}

	public String getSanghat() {
		return sanghat;
	}

	public void setSanghat(String sanghat) {
		this.sanghat = FormatterUtil.format(sanghat);
	}

	public String getJilla() {
		return jilla;
	}

	public void setJilla(String jilla) {
		this.jilla = FormatterUtil.format(jilla);
	}

	public String getTaluka() {
		return taluka;
	}

	public void setTaluka(String taluka) {
		this.taluka = FormatterUtil.format(taluka);
	}

	public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = FormatterUtil.format(group);
	}

	public String getKendra() {
		return kendra;
	}

	public void setKendra(String kendra) {
		this.kendra = FormatterUtil.format(kendra);
	}

	public Yuva getjSannidatha() {
		return jSannidatha;
	}

	public void setjSannidatha(Yuva jSannidatha) {
		this.jSannidatha = jSannidatha;
	}

	public Yuva gettSannidatha() {
		return tSannidatha;
	}

	public void settSannidatha(Yuva tSannidatha) {
		this.tSannidatha = tSannidatha;
	}

	public Yuva getAvekshak() {
		return avekshak;
	}

	public void setAvekshak(Yuva avekshak) {
		this.avekshak = avekshak;
	}

	public Yuva getSanchalak1() {
		return sanchalak1;
	}

	public void setSanchalak1(Yuva sanchalak1) {
		this.sanchalak1 = sanchalak1;
	}

	public Yuva getSanchalak2() {
		return sanchalak2;
	}

	public void setSanchalak2(Yuva sanchalak2) {
		this.sanchalak2 = sanchalak2;
	}

	public KendraType getKendraType() {
		return kendraType;
	}

	public void setKendraType(KendraType kendraType) {
		this.kendraType = kendraType;
	}

	public YuvaYuvati getYuvaYuvati() {
		return yuvaYuvati;
	}

	public void setYuvaYuvati(YuvaYuvati yuvaYuvati) {
		this.yuvaYuvati = yuvaYuvati;
	}

	public String getYearOfKendra() {
		return yearOfKendra;
	}

	public void setYearOfKendra(String yearOfKendra) {
		this.yearOfKendra = yearOfKendra;
	}

	public KendraCategory getCategory() {
		return category;
	}

	public void setCategory(KendraCategory category) {
		this.category = category;
	}

	public String getKendraNumber() {
		return kendraNumber;
	}

	public void setKendraNumber(String kendraNumber) {
		this.kendraNumber = FormatterUtil.format(kendraNumber);
	}

	public KendraStatus getStatus() {
		return status;
	}

	public void setStatus(KendraStatus status) {
		this.status = status;
	}

	public String getYearMerged() {
		return yearMerged;
	}

	public void setYearMerged(String yearMerged) {
		this.yearMerged = FormatterUtil.format(yearMerged);
	}

	public String getMergedTo() {
		return mergedTo;
	}

	public void setMergedTo(String mergedTo) {
		this.mergedTo = FormatterUtil.format(mergedTo);
	}

	public String getMinAttendance() {
		return minAttendance;
	}

	public void setMinAttendance(String minAttendance) {
		this.minAttendance = FormatterUtil.format(minAttendance);
	}

	public String getMaxAttendance() {
		return maxAttendance;
	}

	public void setMaxAttendance(String maxAttendance) {
		this.maxAttendance = FormatterUtil.format(maxAttendance);
	}

	public String getYKConducted() {
		return YKConducted;
	}

	public void setYKConducted(String yKConducted) {
		YKConducted = FormatterUtil.format(yKConducted);
	}

	public String getVillageOfYK() {
		return villageOfYK;
	}

	public void setVillageOfYK(String villageOfYK) {
		this.villageOfYK = FormatterUtil.format(villageOfYK);
	}

	public String getLandmark() {
		return landmark;
	}

	public void setLandmark(String landmark) {
		this.landmark = FormatterUtil.format(landmark);
	}

	public String getyKSthal() {
		return yKSthal;
	}

	public void setyKSthal(String yKSthal) {
		this.yKSthal = FormatterUtil.format(yKSthal);
	}

	public String getyKSthalPin() {
		return yKSthalPin;
	}

	public void setyKSthalPin(String yKSthalPin) {
		this.yKSthalPin = FormatterUtil.format(yKSthalPin);
	}

	public String getDayOfYK() {
		return dayOfYK;
	}

	public void setDayOfYK(String dayOfYK) {
		this.dayOfYK = FormatterUtil.format(dayOfYK);
	}

	public String getTimeOfYK() {
		return timeOfYK;
	}

	public void setTimeOfYK(String timeOfYK) {
		this.timeOfYK = FormatterUtil.format(timeOfYK);
	}

	public String getSwadhyayLoc() {
		return swadhyayLoc;
	}

	public void setSwadhyayLoc(String swadhyayLoc) {
		this.swadhyayLoc = FormatterUtil.format(swadhyayLoc);
	}

	public String getSwadhyayVillage() {
		return swadhyayVillage;
	}

	public void setSwadhyayVillage(String swadhyayVillage) {
		this.swadhyayVillage = FormatterUtil.format(swadhyayVillage);
	}

	public String getErrors() {
		return errors;
	}

	public void setErrors(String errors) {
		this.errors = FormatterUtil.format(errors);
	}

	

}
