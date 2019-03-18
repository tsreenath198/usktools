package com.yk.server.app.model;

public enum KendraCategory {
	VILLAGE("Village"), CITY_VISTAR("City Vistar");

	String value;

	KendraCategory(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return this.value;
	}
	
	
}
