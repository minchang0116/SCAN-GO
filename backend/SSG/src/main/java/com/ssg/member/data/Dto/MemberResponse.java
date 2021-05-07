package com.ssg.member.data.Dto;

import com.ssg.member.data.Member;
import lombok.*;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponse {
    private long id;
    private String loginId;
    private String phone;
    @Temporal(TemporalType.DATE)
    private Date birth;

    public MemberResponse(Member member) {
        this.id = member.getId();
        this.loginId = member.getLoginId();
        this.phone = member.getPhone();
        this.birth = member.getBirth();
    }
}
