import logoStyle from "./logo.module.css";
import Image from "next/image";
import Link from "next/link";

const Logo = ({light, className}) => {
  return (
    <div className={`${light ? `${logoStyle.logo} ${logoStyle.light}` : logoStyle.logo} ${className}`}>
      <Link href="/">
        <a>
          <Image
            src="/images/logo.svg"
            width={160}
            height={44}
            alt="logo image"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
