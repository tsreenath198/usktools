package com.yk.server.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yk.server.app.model.YuvanDetails;
import com.yk.server.app.repository.APIRepository;

@Service
@Transactional
public class APIServiceImp implements APIService {
	@Autowired
	APIRepository apiRepository;

	@Override
	public void createUser(List<YuvanDetails> yuvanDetails) {
		apiRepository.saveAll(yuvanDetails);
	}
}
