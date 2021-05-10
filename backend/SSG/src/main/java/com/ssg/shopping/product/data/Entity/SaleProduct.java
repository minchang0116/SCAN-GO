package com.ssg.shopping.product.data.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "sale_product")
public class SaleProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String prodName;
    private String prodOriginalPrice;
    private String prodSalePrice;
    private String image;
}
