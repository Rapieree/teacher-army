import logoStyle from "./logo.module.css";
import Image from "next/image";
import Link from "next/link";
import {LogoType} from "../../utils/const";

const logoSrc = {
  [LogoType.LIGHT]: `/images/logo/teacher-army-logo-white.svg`,
  [LogoType.DARK]: `/images/logo/teacher-army-logo-black.svg`,
  [LogoType.VIOLET]: `/images/logo/teacher-army-logo-violet.svg`,
};

const Logo = ({type = LogoType.DARK, className}) => {
  return (
    <div className={`${logoStyle.logo} ${className}`}>
      <Link href="/">
        <a>
          <div className={logoStyle.image}>
            <Image
              src={logoSrc[type]}
              alt="logo image"
              quality={100}
              layout="fill"
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
