import LoginLayout from "@pub/layout/LoginLayout";
import LoginInput from "@pub/components/Login/Input";
import LoginButton from "@pub/components/Login/Button";
import IcLoginTitle from "@/assets/icons/ico_login_title.svg";

export default function Login03() {
  return (
    <LoginLayout>
      <div className="flex flex-col items-center space-y-8 w-[22.5rem] m-auto">
        <IcLoginTitle />
        <div className="flex flex-col space-y-2 w-full">
          <LoginInput
            btn="인증번호 발송"
            placeholder="(2차 인증) 이메일을 입력하세요"
          />
          <LoginInput btn="재발송" value="vkzldvmfoswm@naver.com" />
          <LoginInput count placeholder="인증번호 입력" />
          <LoginButton type="green">확인</LoginButton>
          <ul className="list-dot text-sm font-medium text-muted mt-3">
            <li>
              인증번호가 오지 않는다면{" "}
              <span className="text-[#22D663]">&#91;재발송&#93;</span> 버튼을
              눌러주세요.
            </li>
          </ul>
        </div>
      </div>
    </LoginLayout>
  );
}
