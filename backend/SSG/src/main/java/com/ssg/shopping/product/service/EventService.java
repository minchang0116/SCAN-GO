package com.ssg.shopping.product.service;

import com.ssg.shopping.product.data.Entity.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface EventService {
    @Transactional
    List<Events> getEventsList();

    @Transactional
    List<DumProduct> getDumProductList();

    @Transactional
    List<SaleProduct> getSaleProductList();

    @Transactional
    List<PlusOneProduct> getPlusOneProductList();

    @Transactional
    List<BeerRanking> getBeerRanking();

    @Transactional
    List<IcecreamRanking> getIcecreamRanking();

    @Transactional
    List<SnackRanking> getSnackRanking();
}
