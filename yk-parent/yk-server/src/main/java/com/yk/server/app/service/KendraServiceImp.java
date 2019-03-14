package com.yk.server.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yk.server.app.model.Kendra;
import com.yk.server.app.repository.KendraRepository;

@Service
@Transactional
public class KendraServiceImp implements KendraService {
	@Autowired
	KendraRepository apiRepository;

	@Override
	public void create(List<Kendra> kendramDetails) {
		apiRepository.saveAll(kendramDetails);
	}

	@Override
	public List<Kendra> getAllKendrams() {
		return (List<Kendra>) apiRepository.findAll();
	}
}
