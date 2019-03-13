package com.yk.server.app.repository;

import org.springframework.data.repository.CrudRepository;

import com.yk.server.app.model.KendramDetails;

public interface KendraRepository extends CrudRepository<KendramDetails, Long> {

}
