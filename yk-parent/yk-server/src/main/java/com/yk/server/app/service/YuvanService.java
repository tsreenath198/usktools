package com.yk.server.app.service;

import java.util.List;

import com.yk.server.app.model.YuvanDetails;

public interface YuvanService {
	public void create(List<YuvanDetails> yuvanDetails);

	public List<YuvanDetails> getAll();

	public List<YuvanDetails> getAllByRole(String role);

}
