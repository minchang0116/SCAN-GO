package com.ssg.shopping.product.service;

import com.ssg.shopping.product.data.Entity.*;
import com.ssg.shopping.product.data.Repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class EventServiceImpl implements EventService {
    private final EventsRepository eventsRepository;
    private final DumProductRepository dumProductRepository;
    private final SaleProductRepository saleProductRepository;
    private final PlusOneProductRepository plusOneProductRepository;
    private final BeerRankingRepository beerRankingRepository;
    private final IcecreamRankingRepository icecreamRankingRepository;
    private final SnackRankingRepository snackRankingRepository;

    @Override
    @Transactional
    public List<Events> getEventsList() {
        return eventsRepository.findAll();
    }

    @Override
    @Transactional
    public List<DumProduct> getDumProductList() {
        return dumProductRepository.findAll();
    }

    @Override
    @Transactional
    public List<SaleProduct> getSaleProductList() {
        return saleProductRepository.findAll();
    }

    @Override
    @Transactional
    public List<PlusOneProduct> getPlusOneProductList() {
        return plusOneProductRepository.findAll();
    }

    @Override
    @Transactional
    public List<BeerRanking> getBeerRanking() {
        return beerRankingRepository.findAll();
    }

    @Override
    @Transactional
    public List<IcecreamRanking> getIcecreamRanking() {
        return icecreamRankingRepository.findAll();
    }

    @Override
    @Transactional
    public List<SnackRanking> getSnackRanking() {
        return snackRankingRepository.findAll();
    }
}
