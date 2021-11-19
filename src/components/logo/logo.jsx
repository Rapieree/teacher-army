import logoStyles from "./logo.module.css";
import Image from "next/image";
import Link from "next/link";

const Logo = ({light}) => {
  return (
    <div className={light ? `${logoStyles.logo} ${logoStyles.light}` : logoStyles.logo}>
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
