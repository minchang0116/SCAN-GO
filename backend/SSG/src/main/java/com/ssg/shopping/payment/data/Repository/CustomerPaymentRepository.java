package com.ssg.shopping.payment.data.Repository;

import com.ssg.shopping.payment.data.Entity.CustomerPayment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerPaymentRepository extends JpaRepository<CustomerPayment, Long> {

}
