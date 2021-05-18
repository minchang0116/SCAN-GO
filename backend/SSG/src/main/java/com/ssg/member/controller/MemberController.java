package com.ssg.member.controller;

import com.ssg.member.data.Dto.LoginDto;
import com.ssg.member.data.Dto.MemberDto;
import com.ssg.member.data.Dto.MemberResponse;
import com.ssg.member.data.Member;
import com.ssg.member.jwt.TokenProvider;
import com.ssg.member.service.MemberService;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"https://k4d101.p.ssafy.io", "http://localhost:3000"})
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService;
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    public MemberController(MemberService memberService, TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder) {
        this.memberService = memberService;
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
    }

    @ApiOperation(value = "로그인", notes = "입력값 : loginId, loginPwd\n출력값 : 회원정보")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDto loginDto) {
        HttpHeaders httpHeaders = memberService.login(loginDto);
        Member member = memberService.getMember(loginDto.getLoginId());
        System.out.println("<회원 : 로그인> 로그인아이디 : "+loginDto.getLoginId());
        return new ResponseEntity<>(new MemberResponse(member), httpHeaders, HttpStatus.OK);
    }

    @ApiOperation(value = "회원가입", notes = "입력값 : loginId, loginPwd, birth, phone\n출력값 : 회원정보")
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody MemberDto memberDto) {
        System.out.println("<회원 : 회원가입> 로그인아이디 : "+memberDto.getLoginId());
        return ResponseEntity.ok(new MemberResponse(memberService.signup(memberDto)));
    }

    @ApiOperation(value = "아이디 중복 체크", notes = "입력값 : loginId\n출력값 : success(가능)/fail(불가능)")
    @GetMapping("/checkId")
    public ResponseEntity<?> checkId(@RequestParam String loginId) {
        System.out.println("<회원 : 아이디 중복체크> 로그인아이디 : "+loginId);
        return ResponseEntity.ok(memberService.checkId(loginId));
    }

    @ApiOperation(value = "폰번호 중복 체크", notes = "입력값 : phone\n출력값 : success(가능)/fail(불가능)")
    @GetMapping("/checkPhone")
    public ResponseEntity<?> checkPhone(@RequestParam String phone) {
        System.out.println("<회원 : 폰번호 중복체크> 폰번호 : "+phone);
        return ResponseEntity.ok(memberService.checkPhone(phone));
    }
}
