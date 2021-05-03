package com.ssg.shopping.payment.data.Repository;

import com.ssg.shopping.payment.data.Entity.CustomerPayment;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface CustomerPaymentRepository extends JpaRepository<CustomerPayment, Long> {
    public List<CustomerPayment> findByMember_IdAndTxDateTimeIsGreaterThan(long memberId, Date date, Pageable page);
}
