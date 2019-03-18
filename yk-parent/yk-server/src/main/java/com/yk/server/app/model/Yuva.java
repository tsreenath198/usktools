package com.yk.server.app.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.yk.server.app.util.FormatterUtil;
import com.yk.server.app.util.Role;

@Entity
@Table(name = "yuva", uniqueConstraints = { @UniqueConstraint(columnNames = { "name", "phone", "role" }) })
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Yuva {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "name")
	private String name;
	@Column(name = "phone")
	private String phone;
	@Column(name = "dob")
	private Date dob;
	@Column(name = "role")
	@Enumerated(EnumType.STRING)
	private Role role;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Yuva() {

	}

	public Yuva(Role role) {
		super();
		this.role = role;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = FormatterUtil.format(name);
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Role getRole() {
		return role;
	}

}
