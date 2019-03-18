package com.yk.server.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.yk.server.app.model.Yuva;

public interface YuvaRepository extends JpaRepository<Yuva, Long> {

	List<Yuva> getAllByRole(String role);

	@Query(value = "select y from Yuva y where y.name=?1 and y.phone=?2 and y.role=?3")
	Yuva find(String name, String phone, String role);

}
