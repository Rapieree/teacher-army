import {statisticsContent} from "./statistics-content";
import statisticsStyle from "./statistics.module.css";
import ShieldSvg from "../../assets/svg/shield.svg";

const content = statisticsContent;

const Statistics = ({className}) => {
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
                <div className={statisticsStyle.shield}>
                  <ShieldSvg className={statisticsStyle.shit} />
                </div>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};

export default Statistics;
