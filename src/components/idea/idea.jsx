import Image from "next/image";
import ideaStyle from "./idea.module.css";
import CustomButton from "../custom-button/custom-button";
import {ReactSVG} from "react-svg";

const Idea = ({className, content}) => {
  return (
    <section className={`${ideaStyle.idea} ${className}`}>
      <div className={ideaStyle.image}>
        <Image
          alt={content.image.alt}
          src={content.image.src}
          objectFit="cover"
          layout="fill"
          quality={90}
        />
      </div>
      <div className={ideaStyle.block}>
        <p className={ideaStyle.slogan}>{content.slogan}</p>
        <h2 className={ideaStyle.title}>{content.title}</h2>
        <p className={ideaStyle.description}>{content.description}</p>
        <ul className={ideaStyle.list}>
          {
            content.featuresList.map((name) => {
              return (
                <li key={name} className={ideaStyle.item}>
                  <ReactSVG
                    src={content.icon.src}
                    className={ideaStyle.itemIcon}
                    width={content.icon.width}
                    height={content.icon.height}
                    wrapper="svg"
                  />
                  <span>{name}</span>
                </li>
              );
            })
          }
        </ul>
        <CustomButton className={ideaStyle.button}>{content.buttonText}</CustomButton>
      </div>
    </section>
  );
};

export default Idea;
