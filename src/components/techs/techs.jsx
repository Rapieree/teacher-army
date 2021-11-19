import Image from "next/dist/client/image";
import techsStyle from "./techs.module.css";

const content = [
  {name: `Fedex`, src: `/images/techs/fedex.png`},
  {name: `Google`, src: `/images/techs/google.png`},
  {name: `Ola`, src: `/images/techs/ola.png`},
  {name: `Microsoft`, src: `/images/techs/microsoft.png`},
  {name: `Amazon`, src: `/images/techs/amazon.png`},
  {name: `Fedx`, src: `/images/techs/fedx.png`},
  {name: `Walmart`, src: `/images/techs/walmart.png`},
];

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
