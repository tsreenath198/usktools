package com.yk.server.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "kendram_details")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class KendramDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "country")
	private String country;
	@Column(name = "state")
	private String state;
	@Column(name = "jillaName")
	private String jillaName;
	@Column(name = "jillaSannidhata")
	private String jillaSannidhata;
	@Column(name = "jillaSannidhataDob")
	private String jillaSannidhataDob;
	@Column(name = "jillaSannidhataContact")
	private String jillaSannidhataContact;
	@Column(name = "talukaName")
	private String talukaName;
	@Column(name = "talukaSannidhata")
	private String talukaSannidhata;
	@Column(name = "talukaSannidhataDob")
	private String talukaSannidhataDob;
	@Column(name = "talukaSannidhataContact")
	private String talukaSannidhataContact;
	@Column(name = "groupName")
	private String groupName;
	@Column(name = "avekshakName")
	private String avekshakName;
	@Column(name = "avekshakDob")
	private String avekshakDob;
	@Column(name = "avekshakContact")
	private String avekshakContact;
	@Column(name = "kendraName")
	private String kendraName;
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
	@Column(name = "sanchalak1")
	private String sanchalak1;
	@Column(name = "sanchalak1Dob")
	private String sanchalak1Dob;
	@Column(name = "sanchalak1Contact")
	private String sanchalak1Contact;
	@Column(name = "sanchalak2")
	private String sanchalak2;
	@Column(name = "sanchalak2Dob")
	private String sanchalak2Dob;
	@Column(name = "sanchalak2Contact")
	private String sanchalak2Contact;
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
	@Column(name = "role")
	private String role;

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

	public String getState() {
		return state;
	}

	public String getJillaSannidhataDob() {
		return jillaSannidhataDob;
	}

	public void setJillaSannidhataDob(String jillaSannidhataDob) {
		this.jillaSannidhataDob = jillaSannidhataDob;
	}

	public String getJillaSannidhataContact() {
		return jillaSannidhataContact;
	}

	public void setJillaSannidhataContact(String jillaSannidhataContact) {
		this.jillaSannidhataContact = jillaSannidhataContact;
	}

	public String getTalukaSannidhataDob() {
		return talukaSannidhataDob;
	}

	public void setTalukaSannidhataDob(String talukaSannidhataDob) {
		this.talukaSannidhataDob = talukaSannidhataDob;
	}

	public String getTalukaSannidhataContact() {
		return talukaSannidhataContact;
	}

	public void setTalukaSannidhataContact(String talukaSannidhataContact) {
		this.talukaSannidhataContact = talukaSannidhataContact;
	}

	public String getAvekshakDob() {
		return avekshakDob;
	}

	public void setAvekshakDob(String avekshakDob) {
		this.avekshakDob = avekshakDob;
	}

	public String getAvekshakContact() {
		return avekshakContact;
	}

	public void setAvekshakContact(String avekshakContact) {
		this.avekshakContact = avekshakContact;
	}

	public String getSanchalak1Dob() {
		return sanchalak1Dob;
	}

	public void setSanchalak1Dob(String sanchalak1Dob) {
		this.sanchalak1Dob = sanchalak1Dob;
	}

	public String getSanchalak1Contact() {
		return sanchalak1Contact;
	}

	public void setSanchalak1Contact(String sanchalak1Contact) {
		this.sanchalak1Contact = sanchalak1Contact;
	}

	public String getSanchalak2Dob() {
		return sanchalak2Dob;
	}

	public void setSanchalak2Dob(String sanchalak2Dob) {
		this.sanchalak2Dob = sanchalak2Dob;
	}

	public String getSanchalak2Contact() {
		return sanchalak2Contact;
	}

	public void setSanchalak2Contact(String sanchalak2Contact) {
		this.sanchalak2Contact = sanchalak2Contact;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getJillaName() {
		return jillaName;
	}

	public void setJillaName(String jillaName) {
		this.jillaName = jillaName;
	}

	public String getJillaSannidhata() {
		return jillaSannidhata;
	}

	public void setJillaSannidhata(String jillaSannidhata) {
		this.jillaSannidhata = jillaSannidhata;
	}

	public String getTalukaName() {
		return talukaName;
	}

	public void setTalukaName(String talukaName) {
		this.talukaName = talukaName;
	}

	public String getTalukaSannidhata() {
		return talukaSannidhata;
	}

	public void setTalukaSannidhata(String talukaSannidhata) {
		this.talukaSannidhata = talukaSannidhata;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	public String getAvekshakName() {
		return avekshakName;
	}

	public void setAvekshakName(String avekshakName) {
		this.avekshakName = avekshakName;
	}

	public String getKendraName() {
		return kendraName;
	}

	public void setKendraName(String kendraName) {
		this.kendraName = kendraName;
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

	public String getSanchalak1() {
		return sanchalak1;
	}

	public void setSanchalak1(String sanchalak1) {
		this.sanchalak1 = sanchalak1;
	}

	public String getSanchalak2() {
		return sanchalak2;
	}

	public void setSanchalak2(String sanchalak2) {
		this.sanchalak2 = sanchalak2;
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "KendramDetails [id=" + id + ", country=" + country + ", state=" + state + ", jillaName=" + jillaName
				+ ", jillaSannidhata=" + jillaSannidhata + ", talukaName=" + talukaName + ", talukaSannidhata="
				+ talukaSannidhata + ", groupName=" + groupName + ", avekshakName=" + avekshakName + ", kendraName="
				+ kendraName + ", kendraType=" + kendraType + ", yuvaYuvati=" + yuvaYuvati + ", yearOfKendra="
				+ yearOfKendra + ", category=" + category + ", kendraNumber=" + kendraNumber + ", status=" + status
				+ ", yearMerged=" + yearMerged + ", mergedTo=" + mergedTo + ", sanchalak1=" + sanchalak1
				+ ", sanchalak2=" + sanchalak2 + ", minAttendance=" + minAttendance + ", maxAttendance=" + maxAttendance
				+ ", YKConducted=" + YKConducted + ", villageOfYK=" + villageOfYK + ", landMark=" + landMark
				+ ", yKSthal=" + yKSthal + ", yKSthalPin=" + yKSthalPin + ", dayOfYK=" + dayOfYK + ", timeOfYK="
				+ timeOfYK + ", swadhyayLoc=" + swadhyayLoc + ", swadhyayVillage=" + swadhyayVillage + ", role=" + role
				+ "]";
	}

}
