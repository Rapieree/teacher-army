import {useState} from "react";
import CustomButton from "../custom-button/custom-button";
import payFormStyle from "./pay-form.module.css";

const Price = {
  SIMPLE: 1.00,
  SMART: 4.00,
}

const PayForm = ({}) => {
  const [price, setPrice] = useState(Price.SIMPLE);
  const [email, setEmail] = useState(``);

  return (
    <div className={payFormStyle.payForm}>
      <form name="payanyway_from" id="payanyway_from" action="https://moneta.ru/assistant.htm" method="post">
        <div className={payFormStyle.block}>
          <label htmlFor="email-field">Почта: </label>
          <input type="email" id="email-field" placeholder="Ivan@gmail.com" onChange={(evt) => setEmail(evt.target.value)}/>
        </div>
        <div className={payFormStyle.block}>
          <p className={payFormStyle.priceTitle}>Стоимость:&nbsp;
            <span className={payFormStyle.priceCount}>{price}</span>
            <span> &#8381;</span>
          </p>
        </div>
        <ul className={`${payFormStyle.block} ${payFormStyle.tariffsList}`}>
          <li className={payFormStyle.tariffRadioItem}>
            <input type="radio" className="visually-hidden" name="tariffs-group" id="tariff-simple" onChange={() => setPrice(Price.SIMPLE)} defaultChecked/>
            <label htmlFor="tariff-simple">Тарифф Simple&nbsp;(Оплата за 1 занятие)</label>
          </li>
          <li className={payFormStyle.tariffRadioItem}>
            <input type="radio" className="visually-hidden" name="tariffs-group" id="tariff-smart" onChange={() => setPrice(Price.SMART)} />
            <label htmlFor="tariff-smart">Тарифф Smart&nbsp;(Оплата за 4 занятия)</label>
          </li>
        </ul>
        <CustomButton className={payFormStyle.payButton} type="submit">Оплатить</CustomButton>
        <input type="hidden" name="MNT_TEST_MODE" defaultValue="0" />
        <input type="hidden" name="MNT_ID" defaultValue="29398836" />
        <input type="hidden" name="MNT_AMOUNT" defaultValue={price} />
        <input type="hidden" name="MNT_CURRENCY_CODE" defaultValue="RUB" />
        {/* <input type="hidden" name="MNT_CUSTOM1" defaultValue="12345"/> */}
        <input type="hidden" name="MNT_DESCRIPTION" defaultValue={`Оплата за 1(одно) занятие в Teacher-Army. Оплатил: ${email}`} />
        <input type="hidden" name="MNT_SUCCESS_URL" defaultValue="" />
      </form>
    </div>
  );
};

export default PayForm;
