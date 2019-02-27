package com.yk.server.app.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "yuvan_details")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class YuvanDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "taluka")
	private String taluka;
	@Column(name = "patti")
	private String patti;
	@Column(name = "videoKendra")
	private String videoKendra;
	@Column(name = "kendra")
	private String kendra;
	@Column(name = "kendraType")
	private String kendraType;
	@Column(name = "jimmedari")
	private String jimmedari;
	@Column(name = "surname")
	private String surname;
	@Column(name = "middleName")
	private String middleName;
	@Column(name = "name")
	private String name;
	@Column(name = "contact")
	private String contact;
	@Column(name = "dob")
	private Date dob;
	@Column(name = "age")
	private int age;
	@Column(name = "residence")
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
