import {ReactSVG} from "react-svg";
import featuresStyle from "./features.module.css";

const Features = ({className, content}) => {
  return (
    <section className={`${featuresStyle.features} ${className}`}>
      <div className={featuresStyle.wrapper}>
        <div className={featuresStyle.block}>
          <p className={featuresStyle.slogan}>{content.slogan}</p>
          <h2 className={featuresStyle.title}>{content.title}</h2>
          <p className={featuresStyle.description}>{content.description}</p>
        </div>
        {
          content.featuresList.map((card) => {
            return (
              <div className={featuresStyle.card} key={card.name}>
                <ReactSVG
                  src={card.icon.src}
                  className={featuresStyle.icon}
                  width={card.icon.width}
                  height={card.icon.height}
                  wrapper="svg"
                />
                <h3 className={featuresStyle.cardName}>{card.name}</h3>
                <p className={featuresStyle.cardText}>{card.description}</p>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};

export default Features;
