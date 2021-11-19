import Header from "../header/header";
import promoStyles from "./promo.module.css";
import Image from "next/dist/client/image";
import CustomButton from "../custom-button/custom-button";

const content = {
  title: `Inspiration Technology.`,
  slogan: `Runs faster.`,
  subslogan: `Costs less and never breaks.`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat `,
};

const Promo = ({className}) => {

  return (
    <section className={`${promoStyles.promo} ${className}`}>
      <Header className={promoStyles.header} light />

      <div className={promoStyles.wrapper}>
        <div className={promoStyles.block}>
          <h2 className={promoStyles.title}>{content.title}</h2>
          <p className={promoStyles.slogan}>{content.slogan}
            <span className={promoStyles.subslogan}>{content.subslogan}</span>
          </p>
          <hr className={promoStyles.hr} />
          <p className={promoStyles.description}>{content.description}</p>

          <div className={promoStyles.buttons}>
            <CustomButton className={promoStyles.getStartedButton}>Get Started</CustomButton>
            <CustomButton className={promoStyles.trialButton}>Free Trial</CustomButton>
          </div>
        </div>

        <div className={promoStyles.image}>
          <Image
            src="/images/promo.png"
            width="811"
            height="589"
            alt="promo image"
          />
        </div>
      </div>
    </section>
  );
};

export default Promo;
