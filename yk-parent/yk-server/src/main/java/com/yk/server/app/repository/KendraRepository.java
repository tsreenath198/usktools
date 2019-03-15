package com.yk.server.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.yk.server.app.model.Kendra;

public interface KendraRepository extends JpaRepository<Kendra, Long> {

	@Query(value = "select errors from kendra where errors is not null", nativeQuery = true)
	List<String> findErrors();
}
