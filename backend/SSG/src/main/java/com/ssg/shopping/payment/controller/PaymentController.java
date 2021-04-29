package com.ssg.shopping.payment.controller;

import com.ssg.shopping.payment.data.Response.CustomerPaymentResponse;
import com.ssg.shopping.payment.service.PaymentService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = {""}, allowCredentials = "true")
@RequestMapping("/payment")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @ApiOperation(value = "장바구니 조회 (없으면 새로만들고 있으면 불러오기)", notes = "입력값 : memberId(사용자고유번호)\n출력값 : 장바구니 정보")
    @GetMapping("/get_customer_payment")
    public ResponseEntity<?> getCustomerPayment(@RequestParam long memberId) {
        CustomerPaymentResponse customerPayment = paymentService.getCustomerPayment(memberId);
        System.out.println("<장바구니> 멤버고유번호 : "+memberId+", 장바구니번호 : "+customerPayment.getId());
        return new ResponseEntity<>(customerPayment, HttpStatus.OK);
    }
}
