import PropTypes from "prop-types";
import IcQr from "@/assets/icons/ico_login_qr.svg";

/**
 * full 레이아웃
 * @returns
 */
export default function LoginLayout({ children }) {
  return (
    <div className="lyt-login">
      <div className="login-bg">
        <span className="absolute top-10 left-10">
          <IcQr />
        </span>
      </div>
      <div className="overflow-y-auto grow max-h-[calc(100vh-3rem)] py-20">
        <div className="flex justify-center min-h-full">{children}</div>
      </div>
    </div>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.element,
};
