package com.brunoaguiar.vendas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunoaguiar.vendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

	
}
