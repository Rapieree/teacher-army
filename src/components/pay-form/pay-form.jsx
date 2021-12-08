import {useState} from "react";
import CustomButton from "../custom-button/custom-button";
import CustomInput from "../custom-input/custom-input";
import CustomLabel from "../custom-label/custom-label";
import payFormStyle from "./pay-form.module.css";

const PayForm = ({className, getCurrentTariff, payTariffs}) => {
  const [currentTariff, setCurrentTariff] = useState(payTariffs[0]);
  const [email, setEmail] = useState(``);

  const onRadioChange = (tariff) => {
    setCurrentTariff(tariff);
    getCurrentTariff(tariff);
  };


  return (
    <div className={`${payFormStyle.payForm} ${className}`}>
      <form name="payanyway_from" id="payanyway_from" action="https://moneta.ru/assistant.htm" method="post">
        <div className={payFormStyle.block}>
          <CustomLabel htmlFor="email-field">Почта: </CustomLabel>
          <CustomInput type="text" id="email-field" placeholder="Ivan@gmail.com" onChange={(evt) => setEmail(evt.target.value)} required/>
        </div>
        <div className={payFormStyle.block}>
          <CustomLabel htmlFor="tel-field">Телефон: </CustomLabel>
          <CustomInput type="tel" id="tel-field" placeholder="+79209101525" name="number-phone" required/>
        </div>
        <div className={payFormStyle.block}>
          <p className={payFormStyle.priceTitle}>Стоимость:&nbsp;
            <br />
            <span className={payFormStyle.priceCount}>{currentTariff.price}</span>
            <span> &#8381;</span>
          </p>
        </div>
        <ul className={`${payFormStyle.block} ${payFormStyle.tariffsList}`}>
          {
            payTariffs.map((tariff, index) => {
              return (
                <li className={payFormStyle.tariffRadioItem} key={tariff.name}>
                  <input
                    type="radio"
                    className="visually-hidden"
                    name="tariff" id={tariff.name}
                    defaultValue={tariff.name}
                    onChange={() => onRadioChange(tariff)}
                    defaultChecked={index === 0 ? true : false}
                  />
                  <label htmlFor={tariff.name}>{tariff.description}</label>
                </li>
              );
            })
          }
        </ul>
        <CustomButton className={payFormStyle.payButton} type="submit">Оплатить</CustomButton>
        <input type="hidden" name="MNT_TEST_MODE" defaultValue="0" />
        <input type="hidden" name="MNT_ID" defaultValue="29398836" />
        <input type="hidden" name="MNT_AMOUNT" defaultValue={currentTariff.price} />
        <input type="hidden" name="MNT_CURRENCY_CODE" defaultValue="RUB" />
        <input type="hidden" name="MNT_SUBSCRIBER_ID" defaultValue={email} />
        <input type="hidden" name="MNT_DESCRIPTION" defaultValue={`Оплата за 1(одно) занятие в Teacher-Army. Оплатил: ${email}`} />
        <input type="hidden" name="MNT_SUCCESS_URL" defaultValue="https://93eb-93-100-206-36.ngrok.io/about" />
      </form>
    </div>
  );
};

export default PayForm;
