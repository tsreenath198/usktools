package com.yk.server.app.service;

import java.util.List;

import com.yk.server.app.model.Kendra;

public interface KendraService {

	public void create(List<Kendra> kendramDetails);

	public List<Kendra> getAllKendrams();


}
