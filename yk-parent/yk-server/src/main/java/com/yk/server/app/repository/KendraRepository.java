package com.yk.server.app.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.yk.server.app.model.Kendra;

public interface KendraRepository extends JpaRepository<Kendra, Long> {

	@Query(value = "select errors from kendra where errors is not null", nativeQuery = true)
	List<String> findErrors();

	@Query(value = "select k.* from kendra k where k.sanghat=?1 and k.jilla=?2 and k.taluka=?3 and k.patti=?4 and k.kendra=?5 and k.yuva_yuvati=?6", nativeQuery = true)
	Kendra find(String sanghat, String jilla, String taluka, String patti, String kendra, String yuvaYuvati);

	@Query(value = "select distinct sanghat from Kendra")
	Set<String> getAllSanghats();

	// SANGHAT QUERIES
	@Query(value = "select distinct jilla from Kendra where sanghat = ?1")
	Set<String> getAllJillas(String s);

	@Query(value = "select distinct taluka from Kendra where sanghat = ?1 and jilla = ?2")
	Set<String> getAllTalukas(String s, String j);

	@Query(value = "select count (distinct jilla) from kendra where sanghat = ?1", nativeQuery = true)
	int countJillas(String s);

	@Query(value = "select count (distinct jsann_id) from kendra where sanghat = ?1", nativeQuery = true)
	int countjSannidathas(String s);

	@Query(value = "select count (distinct taluka) from kendra where sanghat = ?1", nativeQuery = true)
	int countTalukas(String s);

	@Query(value = "select count (distinct tsann_id) from kendra where sanghat = ?1", nativeQuery = true)
	int counttSannidathas(String s);

	@Query(value = "select count (distinct patti) from kendra where yuva_yuvati = 'Yuva' and sanghat = ?1", nativeQuery = true)
	int countYuvaGroups(String s);

	@Query(value = "select count (distinct avekshak_id) from kendra where yuva_yuvati = 'Yuva' and sanghat = ?1", nativeQuery = true)
	int countYuvaAvekshaks(String s);

	@Query(value = "select count (distinct patti) from kendra where yuva_yuvati = 'Yuvati' and sanghat = ?1", nativeQuery = true)
	int countYuvatiGroups(String s);

	@Query(value = "select count (distinct avekshak_id) from kendra where yuva_yuvati = 'Yuvati' and sanghat = ?1", nativeQuery = true)
	int countYuvatiAvekshaks(String s);

	@Query(value = "select count (distinct kendra) from kendra where kendra_type = 'DPC' and sanghat = ?1", nativeQuery = true)
	int countKendrasDPC(String s);

	@Query(value = "select count (distinct kendra) from kendra where kendra_type = 'Yuva Kendra' and sanghat = ?1", nativeQuery = true)
	int countKendrasYK(String s);

	@Query(value = "select count (distinct kendra) from kendra where status <> 'Active' and merged_to is null and sanghat = ?1", nativeQuery = true)
	int countInActive(String s);

	@Query(value = "select count (distinct kendra) from kendra where yuva_yuvati = 'Yuva' and sanghat = ?1", nativeQuery = true)
	int countYuvaKendras(String s);

	@Query(value = "select count (distinct kendra) from kendra where yuva_yuvati = 'Yuvati' and sanghat = ?1", nativeQuery = true)
	int countYuvatiKendras(String s);

	@Query(value = "select count (distinct kendra) from kendra where yuva_yuvati = 'Yuva' and kendra_type = 'DPC' and sanghat = ?1", nativeQuery = true)
	int countYuvaKendrasDPC(String s);

	@Query(value = "select count (distinct kendra) from kendra where yuva_yuvati = 'Yuvati' and kendra_type = 'DPC' and sanghat = ?1", nativeQuery = true)
	int countYuvatiKendrasDPC(String s);

	@Query(value = "select count (distinct kendra) from kendra where yuva_yuvati = 'Yuva' and kendra_type = 'Yuva Kendra' and sanghat = ?1", nativeQuery = true)
	int countYuvaKendrasYK(String s);

	@Query(value = "select count (distinct kendra) from kendra where yuva_yuvati = 'Yuvati' and kendra_type = 'Yuva Kendra' and sanghat = ?1", nativeQuery = true)
	int countYuvatiKendrasYK(String s);

	@Query(value = "select count (distinct sanchalak1_id) + count (distinct sanchalak2_id) from kendra where sanchalak1_id is not null and sanchalak2_id is not null and yuva_yuvati = 'Yuva' and sanghat = ?1", nativeQuery = true)
	int countYuvaSanchalaks(String s);

	@Query(value = "select count (distinct sanchalak1_id) + count (distinct sanchalak2_id) from kendra where sanchalak1_id is not null and sanchalak2_id is not null and yuva_yuvati = 'Yuvati' and sanghat = ?1", nativeQuery = true)
	int countYuvatiSanchalaks(String s);

}
