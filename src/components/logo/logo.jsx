import logoStyles from "./logo.module.css";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={logoStyles.logo}>
      <Link href="/">
        <a>
          <Image
            src="/images/logo.png"
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
