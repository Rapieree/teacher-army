import CustomButton from "../custom-button/custom-button";
import subscribeFormStyle from "./subscribe-form.module.css";

const SubscribeForm = ({className}) => {
  return (
    <div className={`${subscribeFormStyle.wrapper} ${className}`}>
      <form>
        <label htmlFor="feedback-username">Ваше имя: *</label>
        <input type="text" placeholder="Иван" id="feedback-username" minLength="3" maxLength="50"/>
        <label htmlFor="feedback-contacts">Контактные данные: *</label>
        <input type="text" placeholder="Телеграм: @teacher-army" id="feedback-contacts" minLength="5" maxLength="50"/>
        <label htmlFor="feedback-text">Сообщение:</label>
        <textarea id="feedback-text"></textarea>
        <CustomButton type="submit">Отправить</CustomButton>
      </form>
    </div>
  );
};

export default SubscribeForm;
