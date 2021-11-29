import Image from "next/dist/client/image";
import techsStyle from "./techs.module.css";

const Techs = ({className, content}) => {
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
