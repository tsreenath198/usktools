package com.yk.server.app.model;

import java.util.Date;

public class YuvanDetails {
	private String taluka;
	private String patti;
	private String videoKendra;
	private String kendra;
	private String kendraType;
	private String jimmedari;
	private String surname;
	private String middleName;
	private String name;
	private String contact;
	private Date dob;
	private int age;
	private String residence;

	public String getTaluka() {
		return taluka;
	}

	public void setTaluka(String taluka) {
		this.taluka = taluka;
	}

	public String getPatti() {
		return patti;
	}

	public void setPatti(String patti) {
		this.patti = patti;
	}

	public String getVideoKendra() {
		return videoKendra;
	}

	public void setVideoKendra(String videoKendra) {
		this.videoKendra = videoKendra;
	}

	public String getKendra() {
		return kendra;
	}

	public void setKendra(String kendra) {
		this.kendra = kendra;
	}

	public String getKendraType() {
		return kendraType;
	}

	public void setKendraType(String kendraType) {
		this.kendraType = kendraType;
	}

	public String getJimmedari() {
		return jimmedari;
	}

	public void setJimmedari(String jimmedari) {
		this.jimmedari = jimmedari;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getResidence() {
		return residence;
	}

	public void setResidence(String residence) {
		this.residence = residence;
	}

	@Override
	public String toString() {
		return "YuvanDetails [taluka=" + taluka + ", patti=" + patti + ", videoKendra=" + videoKendra + ", kendra="
				+ kendra + ", kendraType=" + kendraType + ", jimmedari=" + jimmedari + ", surname=" + surname
				+ ", middleName=" + middleName + ", name=" + name + ", contact=" + contact + ", dob=" + dob + ", age="
				+ age + ", residence=" + residence + "]";
	}
}
