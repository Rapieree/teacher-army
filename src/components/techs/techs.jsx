import Image from "next/dist/client/image";
import {techsContent} from "./techs-content";
import techsStyle from "./techs.module.css";

const content = techsContent;

const Techs = ({className}) => {
  return (
    <section className={`${techsStyle.techs} ${className}`}>
      <ul className={techsStyle.list}>
        {
          content.map(({name, src}) => {
            return (
              <li key={name} className={techsStyle.item}>
                <Image
                  objectFit="contain"
                  layout="responsive"
                  width="210"
                  height="46"
                  src={src}
                  alt={name}
                />
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};

export default Techs;
