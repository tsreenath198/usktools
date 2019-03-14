package com.yk.server.app.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.yk.server.app.model.Yuva;

public interface YuvanRepository extends CrudRepository<Yuva, Long> {

	List<Yuva> getAllByRole(String role);

}
