import {useState} from "react";
import CustomButton from "../custom-button/custom-button";
import payFormStyle from "./pay-form.module.css";

const PayForm = ({}) => {
  const [price, setPrice] = useState(1.00);
  const [email, setEmail] = useState(``);

  return (
    <div className={payFormStyle.payForm}>
      <form name="payanyway_from" id="payanyway_from" action="https://moneta.ru/assistant.htm" method="post">
        <div className={payFormStyle.block}>
          <label htmlFor="email-field">Почта: </label>
          <input type="email" id="email-field" name="MNT_DESCRIPTION" placeholder="Ivan@gmail.com" onChange={(evt) => setEmail(evt.target.value)}/>
        </div>
        <div className={payFormStyle.block}>
          <p className={payFormStyle.priceTitle}>Стоимость:
            <span className={payFormStyle.priceCount}>{price}</span>
            <span> &#8381;</span>
          </p>
        </div>
        <CustomButton className={payFormStyle.payButton} type="submit">Оплатить</CustomButton>
        <input type="hidden" name="MNT_TEST_MODE" defaultValue="0" />
        <input type="hidden" name="MNT_ID" defaultValue="29398836" />
        <input type="hidden" name="MNT_AMOUNT" defaultValue={price} />
        <input type="hidden" name="MNT_CURRENCY_CODE" defaultValue="RUB" />
        <input type="hidden" name="MNT_CUSTOM1" defaultValue={email}/>
        <input type="hidden" name="MNT_DESCRIPTION" defaultValue="Оплата за 1(одно) занятие в Teacher-Army." />
        <input type="hidden" name="MNT_SUCCESS_URL" defaultValue="" />
      </form>
    </div>
  );
};

export default PayForm;
