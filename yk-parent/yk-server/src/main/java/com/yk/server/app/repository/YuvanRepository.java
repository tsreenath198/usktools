package com.yk.server.app.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.yk.server.app.model.YuvanDetails;

public interface YuvanRepository extends CrudRepository<YuvanDetails, Long> {

	List<YuvanDetails> getAllByRole(String role);

}
