import SubscribeForm from "../subscribe-form/subscribe-form";
import {subscribeContent} from "./subscribe-content";
import subscribeStyle from "./subscribe.module.css";

const content = subscribeContent;

const Subscribe = ({className}) => {
  return (
    <section className={`${subscribeStyle.subscribe} ${className}`}>
      <div className={subscribeStyle.block}>
        <h2 className={subscribeStyle.title}>{content.title}</h2>
        <p className={subscribeStyle.description}>{content.description}</p>
        <SubscribeForm />
      </div>
    </section>
  );
};

export default Subscribe;
