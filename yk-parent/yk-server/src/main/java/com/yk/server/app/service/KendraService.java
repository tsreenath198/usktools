package com.yk.server.app.service;

import java.util.List;

import com.yk.server.app.model.KendramDetails;

public interface KendraService {

	public void createKendrams(List<KendramDetails> kendramDetails);

	public List<KendramDetails> getAllKendrams();


}
