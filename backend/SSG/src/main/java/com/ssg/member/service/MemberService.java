package com.ssg.member.service;

import com.ssg.member.data.Authority;
import com.ssg.member.data.Dto.LoginDto;
import com.ssg.member.data.Member;
import com.ssg.member.data.Dto.MemberDto;
import com.ssg.member.data.MemberRepository;
import com.ssg.member.jwt.JwtFilter;
import com.ssg.member.jwt.TokenProvider;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
    }

    @Transactional
    public HttpHeaders login(LoginDto loginDto) {
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getLoginId(), loginDto.getLoginPwd());

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        Member member = memberRepository.findByLoginId(loginDto.getLoginId());

        String jwt = tokenProvider.createToken(authentication, member);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

        return httpHeaders;
    }

    @Transactional
    public Member signup(MemberDto memberDto) {
        if (memberRepository.findOneWithAuthoritiesByLoginId(memberDto.getLoginId()).orElse(null) != null) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다.");
        }

        Authority authority = Authority.builder()
                .authorityName("ROLE_USER")
                .build();

        Member member = Member.builder()
                .loginId(memberDto.getLoginId())
                .loginPwd(passwordEncoder.encode(memberDto.getLoginPwd()))
                .nickname(memberDto.getNickname())
                .phone(memberDto.getPhone())
                .birth(memberDto.getBirth())
                .authorities(Collections.singleton(authority))
                .activated(true)
                .build();

        return memberRepository.save(member);
    }

    @Transactional(readOnly = true)
    public Optional<Member> getUserWithAuthorities(String loginId) {
        return memberRepository.findOneWithAuthoritiesByLoginId(loginId);
    }

//    @Transactional(readOnly = true)
//    public Optional<Member> getMyUserWithAuthorities() {
//        return userRepository.getCurrentUsername().flatMap(userRepository::findOneWithAuthoritiesByUsername);
//    }

    // 회원정보 조회
    @Transactional
    public Member getMember(String loginId) {
        return memberRepository.findByLoginId(loginId);
    }

    // ID 중복 체크
    @Transactional
    public String checkId(String loginId) {
        if(memberRepository.findByLoginId(loginId) == null) return "success";
        else return "fail";
    }

    // 폰번호 중복 체크
    @Transactional
    public String checkPhone(String phone) {
        if (memberRepository.findByPhone(phone) == null) return "success";
        else return "fail";
    }
}