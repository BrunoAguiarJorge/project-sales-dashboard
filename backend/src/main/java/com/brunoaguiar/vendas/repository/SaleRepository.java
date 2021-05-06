package com.brunoaguiar.vendas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunoaguiar.vendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {


}
