package com.ssg.shopping.product.controller;

import com.ssg.shopping.product.service.EventService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = {""}, allowCredentials = "true")
@RequestMapping("/event")
public class EventController {
    @Autowired
    private EventService eventService;

    @ApiOperation(value = "이벤트 목록 조회", notes = "입력값 : 없음\n출력값 : 이벤트 정보")
    @GetMapping("/get_events")
    public ResponseEntity<?> getEventsList() {
        return new ResponseEntity<>(eventService.getEventsList(), HttpStatus.OK);
    }

    @ApiOperation(value = "덤 증정 제품 조회", notes = "입력값 : 없음\n출력값 : 덤 증정 제품 정보")
    @GetMapping("/get_dum")
    public ResponseEntity<?> getDumProductList() {
        return new ResponseEntity<>(eventService.getDumProductList(), HttpStatus.OK);
    }

    @ApiOperation(value = "+1 제품 조회", notes = "입력값 : 없음\n출력값 : +1 제품 정보")
    @GetMapping("/get_plus")
    public ResponseEntity<?> getPlusOneProductList() {
        return new ResponseEntity<>(eventService.getPlusOneProductList(), HttpStatus.OK);
    }

    @ApiOperation(value = "세일 제품 조회", notes = "입력값 : 없음\n출력값 : 세일 제품 정보")
    @GetMapping("/get_sale")
    public ResponseEntity<?> getSaleProductList() {
        return new ResponseEntity<>(eventService.getSaleProductList(), HttpStatus.OK);
    }

    @ApiOperation(value = "맥주 랭킹 조회", notes = "입력값 : 없음\n출력값 : 맥주 랭킹 정보")
    @GetMapping("/get_beer")
    public ResponseEntity<?> getBeerRankingList() {
        return new ResponseEntity<>(eventService.getBeerRanking(), HttpStatus.OK);
    }

    @ApiOperation(value = "아이스크림 랭킹 조회", notes = "입력값 : 없음\n출력값 : 아이스크림 랭킹 정보")
    @GetMapping("/get_icecream")
    public ResponseEntity<?> getIcecreamRankingList() {
        return new ResponseEntity<>(eventService.getIcecreamRanking(), HttpStatus.OK);
    }

    @ApiOperation(value = "과자 랭킹 조회", notes = "입력값 : 없음\n출력값 : 과자 랭킹 정보")
    @GetMapping("/get_snack")
    public ResponseEntity<?> getSnackRankingList() {
        return new ResponseEntity<>(eventService.getSnackRanking(), HttpStatus.OK);
    }
}
