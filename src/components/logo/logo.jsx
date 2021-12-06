import logoStyle from "./logo.module.css";
import Image from "next/image";
import Link from "next/link";

const Logo = ({light, className}) => {
  return (
    <div className={`${light ? `${logoStyle.logo} ${logoStyle.light}` : logoStyle.logo} ${className}`}>
      <Link href="/">
        <a>
          <div className={logoStyle.image}>
            <Image
              src="/images/logo/teacher-army-logo-white.svg"
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
