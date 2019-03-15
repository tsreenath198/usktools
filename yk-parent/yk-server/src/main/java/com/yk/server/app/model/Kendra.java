package com.yk.server.app.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "kendra")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Kendra {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
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

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "jsann_id")
	private Yuva jSannidatha = new Yuva("Jilla Sannidatha");

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "tsann_id")
	private Yuva tSannidatha = new Yuva("Taluka Sannidatha");;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "avekshak_id")
	private Yuva avekshak = new Yuva("Avekshak");;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "sanchalak1_id")
	private Yuva sanchalak1 = new Yuva("Sanchalak");;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "sanchalak2_id")
	private Yuva sanchalak2 = new Yuva("Sanchalak");;

	@Column(name = "kendraType")
	private String kendraType;
	@Column(name = "yuvaYuvati")
	private String yuvaYuvati;
	@Column(name = "yearOfKendra")
	private String yearOfKendra;
	@Column(name = "category")
	private String category;
	@Column(name = "kendraNumber")
	private String kendraNumber;
	@Column(name = "status")
	private String status;
	@Column(name = "yearMerged")
	private String yearMerged;
	@Column(name = "mergedTo")
	private String mergedTo;

	@Column(name = "minAttendance")
	private String minAttendance;
	@Column(name = "maxAttendance")
	private String maxAttendance;
	@Column(name = "YKConducted")
	private String YKConducted;
	@Column(name = "villageOfYK")
	private String villageOfYK;
	@Column(name = "landMark")
	private String landMark;
	@Column(name = "yKSthal")
	private String yKSthal;
	@Column(name = "yKSthalPin")
	private String yKSthalPin;
	@Column(name = "dayOfYK")
	private String dayOfYK;
	@Column(name = "timeOfYK")
	private String timeOfYK;
	@Column(name = "swadhyayLoc")
	private String swadhyayLoc;
	@Column(name = "swadhyayVillage")
	private String swadhyayVillage;

	@Column(name = "errors")
	private String errors;

	public String getErrors() {
		return errors;
	}

	public void setErrors(String errors) {
		this.errors = errors;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
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

	public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = group;
	}

	public String getKendra() {
		return kendra;
	}

	public void setKendra(String kendra) {
		this.kendra = kendra;
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

	public String getKendraType() {
		return kendraType;
	}

	public void setKendraType(String kendraType) {
		this.kendraType = kendraType;
	}

	public String getYuvaYuvati() {
		return yuvaYuvati;
	}

	public void setYuvaYuvati(String yuvaYuvati) {
		this.yuvaYuvati = yuvaYuvati;
	}

	public String getYearOfKendra() {
		return yearOfKendra;
	}

	public void setYearOfKendra(String yearOfKendra) {
		this.yearOfKendra = yearOfKendra;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getKendraNumber() {
		return kendraNumber;
	}

	public void setKendraNumber(String kendraNumber) {
		this.kendraNumber = kendraNumber;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getYearMerged() {
		return yearMerged;
	}

	public void setYearMerged(String yearMerged) {
		this.yearMerged = yearMerged;
	}

	public String getMergedTo() {
		return mergedTo;
	}

	public void setMergedTo(String mergedTo) {
		this.mergedTo = mergedTo;
	}

	public String getMinAttendance() {
		return minAttendance;
	}

	public void setMinAttendance(String minAttendance) {
		this.minAttendance = minAttendance;
	}

	public String getMaxAttendance() {
		return maxAttendance;
	}

	public void setMaxAttendance(String maxAttendance) {
		this.maxAttendance = maxAttendance;
	}

	public String getYKConducted() {
		return YKConducted;
	}

	public void setYKConducted(String yKConducted) {
		YKConducted = yKConducted;
	}

	public String getVillageOfYK() {
		return villageOfYK;
	}

	public void setVillageOfYK(String villageOfYK) {
		this.villageOfYK = villageOfYK;
	}

	public String getLandMark() {
		return landMark;
	}

	public void setLandMark(String landMark) {
		this.landMark = landMark;
	}

	public String getyKSthal() {
		return yKSthal;
	}

	public void setyKSthal(String yKSthal) {
		this.yKSthal = yKSthal;
	}

	public String getyKSthalPin() {
		return yKSthalPin;
	}

	public void setyKSthalPin(String yKSthalPin) {
		this.yKSthalPin = yKSthalPin;
	}

	public String getDayOfYK() {
		return dayOfYK;
	}

	public void setDayOfYK(String dayOfYK) {
		this.dayOfYK = dayOfYK;
	}

	public String getTimeOfYK() {
		return timeOfYK;
	}

	public void setTimeOfYK(String timeOfYK) {
		this.timeOfYK = timeOfYK;
	}

	public String getSwadhyayLoc() {
		return swadhyayLoc;
	}

	public void setSwadhyayLoc(String swadhyayLoc) {
		this.swadhyayLoc = swadhyayLoc;
	}

	public String getSwadhyayVillage() {
		return swadhyayVillage;
	}

	public void setSwadhyayVillage(String swadhyayVillage) {
		this.swadhyayVillage = swadhyayVillage;
	}

}
