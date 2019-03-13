package com.yk.server.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yk.server.app.model.YuvanDetails;
import com.yk.server.app.repository.YuvanRepository;

@Service
@Transactional
public class YuvanServiceImp implements YuvanService {
	@Autowired
	YuvanRepository apiRepository;

	@Override
	public void create(List<YuvanDetails> yuvanDetails) {
		apiRepository.saveAll(yuvanDetails);
	}

	@Override
	public List<YuvanDetails> getAll() {
		return (List<YuvanDetails>) apiRepository.findAll();
	}

	@Override
	public List<YuvanDetails> getAllByRole(String role) {
		return apiRepository.getAllByRole(role);
	}

}
