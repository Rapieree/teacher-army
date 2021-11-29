import Header from "../header/header";
import promoStyle from "./promo.module.css";
import Image from "next/dist/client/image";
import CustomButton from "../custom-button/custom-button";

const Promo = ({className, content}) => {
  return (
    <section className={`${promoStyle.promo} ${className}`}>
      <Header className={promoStyle.header} light />

      <div className={promoStyle.wrapper}>
        <div className={promoStyle.block}>
          <h2 className={promoStyle.title}>{content.title}</h2>
          <p className={promoStyle.slogan}>{content.slogan}
            <span className={promoStyle.subslogan}>{content.subslogan}</span>
          </p>
          <hr className={promoStyle.hr} />
          <p className={promoStyle.description}>{content.description}</p>

          <div className={promoStyle.buttons}>
            <CustomButton className={promoStyle.getStartedButton}>Get Started</CustomButton>
            <CustomButton className={promoStyle.trialButton}>Free Trial</CustomButton>
          </div>
        </div>

        <div className={promoStyle.image}>
          <Image
            src={content.image.src}
            width={content.image.width}
            height={content.image.height}
            alt={content.image.alt}
          />
        </div>
      </div>
    </section>
  );
};

export default Promo;
