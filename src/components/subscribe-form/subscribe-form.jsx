import {sendFeedback} from "../../api/client-api";
import CustomButton from "../custom-button/custom-button";
import CustomInput from "../custom-input/custom-input";
import CustomLabel from "../custom-label/custom-label";
import subscribeFormStyle from "./subscribe-form.module.css";

const onFormSubmit = async (evt) => {
  evt.preventDefault();

  const feedbackData = {
    name: evt.target.name.value,
    contacts: evt.target.contacts.value,
    message: evt.target.message.value,
  };

  try {
    await sendFeedback(feedbackData);
    evt.target.reset();
    // eslint-disable-next-line no-alert
    alert(`Мы получили ваше сообщение и скоро с вами свяжемся!`);
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(err.message);
  }
};

const SubscribeForm = ({className}) => {
  return (
    <div className={`${subscribeFormStyle.wrapper} ${className}`}>
      <form onSubmit={onFormSubmit} autoComplete="off">
        <CustomLabel htmlFor="feedback-username">Ваше имя: *</CustomLabel>
        <CustomInput type="text" placeholder="Иван" id="feedback-username" minLength="1" maxLength="50" name="name" required/>
        <CustomLabel htmlFor="feedback-contacts">Контактные данные: *</CustomLabel>
        <CustomInput type="text" placeholder="Телеграм: @Ivan" id="feedback-contacts" name="contacts" minLength="1" maxLength="200" required/>
        <CustomLabel htmlFor="feedback-text">Сообщение:</CustomLabel>
        <textarea id="feedback-text" name="message" placeholder="Хочу учиться" maxLength="2000"></textarea>
        <CustomButton type="submit">Отправить</CustomButton>
      </form>
    </div>
  );
};

export default SubscribeForm;
