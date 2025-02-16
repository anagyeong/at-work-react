import {Title, SubTitle} from "../../style/Text";
import React from "react";
import "../../css/screen.css";
import imgA from "../../css/source/img1.png";
import iconA from "../../css/icon/arrow-right.svg";
import {Link} from 'react-router-dom'
import {FloatingBtn, TextBtn} from '../../style/button'

function SignUp({ history }) {
  return (
    <div className="none">
      <div className="img">
        <img src={imgA} width="327px" alt="illustration" />
      </div>
      <Title>
        함께 일해도 낯설기만한회사 동료들
      </Title>
      <SubTitle>
        atwork는 회사사람들이 친해지는 그날까지 함께합니다.
      </SubTitle>
      <FloatingBtn
        onClick={() => history.push("./Onboarding2")}>
        <img src={iconA} width="40px" height="40px" alt="icon" />
      </FloatingBtn>
      <TextBtn>
        <Link to = "../SignUp/InputEmail">건너뛰기</Link>
      </TextBtn>
    </div>
  );
}

export default SignUp;
