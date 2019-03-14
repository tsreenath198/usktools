package com.yk.server.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yk.server.app.model.Yuva;

public interface YuvaRepository extends JpaRepository<Yuva, Long> {

	List<Yuva> getAllByRole(String role);

}
