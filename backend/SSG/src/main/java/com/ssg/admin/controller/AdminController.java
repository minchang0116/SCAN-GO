package com.ssg.admin.controller;

import com.ssg.admin.service.AdminService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = {""}, allowCredentials = "true")
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @ApiOperation(value = "사용자 목록 조회(10개씩)", notes = "입력값 : pageNum(페이지번호:0번부터시작)\n출력값 : 사용자 정보")
    @GetMapping("/members")
    //@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<?> getMembers(@RequestParam long pageNum) {
        return new ResponseEntity<>(adminService.getMemberList(pageNum), HttpStatus.OK);
    }

    @ApiOperation(value = "사용자별 결제내역 조회(10개씩)", notes = "입력값 : loginId(로그인아이디), pageNum(페이지번호:0번부터시작)\n출력값 : 결제 내역 정보")
    @GetMapping("/payments")
    //@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<?> getPayments(@RequestParam String loginId, @RequestParam long pageNum) {
        return new ResponseEntity<>(adminService.getCustomerPaymentList(loginId, pageNum), HttpStatus.OK);
    }
}
