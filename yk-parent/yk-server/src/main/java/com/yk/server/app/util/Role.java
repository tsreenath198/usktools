package com.yk.server.app.util;

public enum Role {
	J_SANNIDATHA("Jilla Sannidatha", 4, 5, 6), T_SANNIDATHA("Taluka Sannidatha", 8, 9, 10), AVEKSHAK("Avekshak", 12, 14,
			13), SANCHALAK_1("Sanchalak", 24, 26, 25), SANCHALAK_2("Sanchalak", 27, 29, 28);

	String role;
	int nameCol, dobCol, phoneCol;

	private Role(String role, int nameCol, int dobCol, int phoneCol) {
		this.role = role;
		this.nameCol = nameCol;
		this.dobCol = dobCol;
		this.phoneCol = phoneCol;
	}

	public String getRole() {
		return role;
	}

	public int getNameCol() {
		return nameCol;
	}

	public int getDobCol() {
		return dobCol;
	}

	public int getPhoneCol() {
		return phoneCol;
	}

	public String toString() {
		return role;
	}
}
