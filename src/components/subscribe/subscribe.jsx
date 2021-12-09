import SubscribeForm from "../subscribe-form/subscribe-form";
import subscribeStyle from "./subscribe.module.css";

const Subscribe = ({className, content}) => {
  return (
    <section className={`${subscribeStyle.subscribe} ${className}`}>
      <h2 className="visually-hidden">Форма обратной связи</h2>
      <div className={subscribeStyle.block}>
        <p className={subscribeStyle.slogan}>{content.slogan}</p>
        <p className={subscribeStyle.description}>{content.description}</p>
        <SubscribeForm showExtraContacts={true} />
      </div>
    </section>
  );
};

export default Subscribe;
