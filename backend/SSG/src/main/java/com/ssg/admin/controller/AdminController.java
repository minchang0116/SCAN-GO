package com.ssg.admin.controller;

import com.ssg.admin.service.AdminService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000"})
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

    @ApiOperation(value = "사용자 결제내역 전체 조회(10개씩)", notes = "입력값 : loginId(로그인아이디), pageNum(페이지번호:0번부터시작)\n출력값 : 결제 내역 정보")
    @GetMapping("/payments_all")
    //@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<?> getAllPayments(@RequestParam String loginId, @RequestParam long pageNum) {
        return new ResponseEntity<>(adminService.getAllCustomerPaymentList(loginId, pageNum), HttpStatus.OK);
    }

    @ApiOperation(value = "사용자 결제내역 날짜별 조회(10개씩)", notes = "입력값 : loginId(로그인아이디), date1(날짜1), date2(날짜2), pageNum(페이지번호:0번부터시작)\n출력값 : 결제 내역 정보")
    @GetMapping("/payments_date")
    //@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<?> getDatePayments(@RequestParam String loginId, @RequestParam String date1, @RequestParam String date2, @RequestParam long pageNum) throws ParseException {
        return new ResponseEntity<>(adminService.getDateCustomerPaymentList(loginId, date1, date2, pageNum), HttpStatus.OK);
    }
}
