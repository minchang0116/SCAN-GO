package com.ssg.member.controller;

import com.ssg.member.data.Dto.LoginDto;
import com.ssg.member.data.Dto.MemberDto;
import com.ssg.member.data.Dto.TokenDto;
import com.ssg.member.data.Member;
import com.ssg.member.jwt.JwtFilter;
import com.ssg.member.jwt.TokenProvider;
import com.ssg.member.service.MemberService;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
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
    public ResponseEntity<?> authorize(@RequestBody LoginDto loginDto) {

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getLoginId(), loginDto.getLoginPwd());

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.createToken(authentication);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

        Member member = memberService.getMember(loginDto.getLoginId());
        return new ResponseEntity<>(member, httpHeaders, HttpStatus.OK);
    }

    @ApiOperation(value = "회원가입", notes = "입력값 : loginId, loginPwd, birth, phone\n출력값 : 회원정보")
    @PostMapping("/signup")
    public ResponseEntity<Member> signup(@RequestBody MemberDto memberDto) {
        return ResponseEntity.ok(memberService.signup(memberDto));
    }

    @ApiOperation(value = "아이디 중복 체크", notes = "입력값 : loginId\n출력값 : success(가능)/fail(불가능)")
    @GetMapping("/checkId")
    public ResponseEntity<?> checkId(@RequestParam String loginId) {
        return ResponseEntity.ok(memberService.checkId(loginId));
    }

    @ApiOperation(value = "폰번호 중복 체크", notes = "입력값 : phone\n출력값 : success(가능)/fail(불가능)")
    @GetMapping("/checkPhone")
    public ResponseEntity<?> checkPhone(@RequestParam String phone) {
        return ResponseEntity.ok(memberService.checkPhone(phone));
    }
}
