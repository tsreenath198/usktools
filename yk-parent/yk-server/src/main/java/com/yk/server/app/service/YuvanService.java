package com.yk.server.app.service;

import java.util.List;

import com.yk.server.app.model.Yuva;

public interface YuvanService {
	public void create(List<Yuva> yuvanDetails);

	public List<Yuva> getAll();

	public List<Yuva> getAllByRole(String role);

}
