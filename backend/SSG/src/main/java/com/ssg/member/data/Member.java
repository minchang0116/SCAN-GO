package com.ssg.member.data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssg.shopping.payment.data.Entity.CurrentPayment;
import com.ssg.shopping.payment.data.Entity.CustomerPayment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Builder
@AllArgsConstructor
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String loginId;
    private String loginPwd;
    private String nickname;
    private String phone;
    @Temporal(TemporalType.DATE)
    private Date birth;
    private boolean activated;

    @JsonIgnore
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
    private List<CustomerPayment> customerPayment = new ArrayList<CustomerPayment>();

    @JsonIgnore
    @OneToOne(mappedBy = "member", fetch = FetchType.LAZY)
    private CurrentPayment currentPayment;

    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "member_id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name")})
    private Set<Authority> authorities;

    public Member() {}
}
