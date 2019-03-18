package com.yk.server.app.model;

public enum KendraStatus {
	ACTIVE("Active"), MERGE("Merged"), INACTIVE("Inactive");

	String value;

	KendraStatus(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return this.value;
	}
}
