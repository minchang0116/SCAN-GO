package com.ssg.shopping.product.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long>{
    public Product findByProdCode(String prodCode);
}
