import linksListStyle from "./link-list.module.css";

const LinksList = ({title, linksData, className}) => {
  return (
    <div className={`${linksListStyle.wrapper} ${className}`}>
      <p className={linksListStyle.title}>{title}</p>
      <ul className={linksListStyle.list}>
        {
          linksData.map((linkData) => {
            return (
              <li key={linkData.name} className={linksListStyle.item}>
                <a href={linkData.href} className={linksListStyle.link}>{linkData.name}</a>
              </li>
            );
          })
        }
      </ul>
    </div>

  );
};

export default LinksList;
