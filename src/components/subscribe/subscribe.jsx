import SubscribeForm from "../subscribe-form/subscribe-form";
import subscribeStyle from "./subscribe.module.css";

const Subscribe = ({className, content}) => {
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
