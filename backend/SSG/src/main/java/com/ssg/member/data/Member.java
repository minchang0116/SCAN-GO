package com.ssg.member.data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssg.shopping.payment.data.CustomerPayment;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "member")
public class Member {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String loginId;
	private String loginPwd;
	private String phone;
	@Temporal(TemporalType.DATE)
    private Date birth;
	private long grade;
	
	@JsonIgnore
	@OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
	private List<CustomerPayment> customerPayment = new ArrayList<CustomerPayment>();
}
