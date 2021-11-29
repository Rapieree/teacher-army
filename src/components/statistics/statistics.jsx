import statisticsStyle from "./statistics.module.css";
import {ReactSVG} from "react-svg";

const Statistics = ({className, content}) => {
  return (
    <section className={`${statisticsStyle.statisctics} ${className}`}>
      <h2 className="visually-hidden">Out statistics</h2>
      <ul className={statisticsStyle.list}>
        {
          content.map((item) => {
            return (
              <li key={item.name} className={statisticsStyle.item}>
                <p className={statisticsStyle.count}>{item.count}</p>
                <p className={statisticsStyle.name}>{item.name}</p>
                <ReactSVG src="/images/svg/shield.svg" className={statisticsStyle.shield} wrapper="svg" />
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};

export default Statistics;
