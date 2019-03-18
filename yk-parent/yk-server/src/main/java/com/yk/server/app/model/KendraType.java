package com.yk.server.app.model;

public enum KendraType {
	YK("Yuva Kendra"), DPC("DPC");

	String value;

	KendraType(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return this.value;
	}
}
