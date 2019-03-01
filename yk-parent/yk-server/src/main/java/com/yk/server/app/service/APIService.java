package com.yk.server.app.service;

import java.util.List;

import com.yk.server.app.model.YuvanDetails;

public interface APIService {
	public void createUser(List<YuvanDetails> yuvanDetails);

	public List<YuvanDetails> getAll();
}
