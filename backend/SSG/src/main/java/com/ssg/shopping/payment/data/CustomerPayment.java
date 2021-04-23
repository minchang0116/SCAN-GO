package com.ssg.shopping.payment.data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssg.member.data.Member;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "customer_payment")
public class CustomerPayment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String storeId;
	@Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date txDateTime;
	private String authHash;
	private long paymentCount;
	private long paymentAmount;
	private String paymentPlan;
	private String paymentResult;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "member_id")
	private Member member;
	
	@JsonIgnore
	@OneToMany(mappedBy = "customerPayment", fetch = FetchType.LAZY)
	private List<PaymentDetail> paymentDetail = new ArrayList<PaymentDetail>();
}
