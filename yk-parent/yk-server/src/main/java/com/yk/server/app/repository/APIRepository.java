package com.yk.server.app.repository;

import org.springframework.data.repository.CrudRepository;

import com.yk.server.app.model.YuvanDetails;

public interface APIRepository extends CrudRepository<YuvanDetails, Long> {

}
