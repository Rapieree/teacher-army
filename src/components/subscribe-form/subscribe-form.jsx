import CustomButton from "../custom-button/custom-button";
import subscribeFormStyle from "./subscribe-form.module.css";

const SubscribeForm = ({className}) => {
  return (
    <div className={`${subscribeFormStyle.wrapper} ${className}`}>
      <form>
        <input type="email" placeholder="Email Address" />
        <CustomButton type="submit">Subscribe</CustomButton>
      </form>
    </div>
  );
};

export default SubscribeForm;
