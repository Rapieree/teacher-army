import {featuresContent} from "./features-content";
import featuresStyle from "./features.module.css";

const content = featuresContent;

const Features = ({className}) => {
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
                {card.icon}
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
