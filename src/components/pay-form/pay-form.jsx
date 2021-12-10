import {useState} from "react";
import {CLIENT_END_POINT} from "../../utils/const";
import CustomButton from "../custom-button/custom-button";
import CustomInput from "../custom-input/custom-input";
import CustomLabel from "../custom-label/custom-label";
import payFormStyle from "./pay-form.module.css";

const PayForm = ({className, getCurrentTariff, payTariffs}) => {
  const [currentTariff, setCurrentTariff] = useState(payTariffs[0]);
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);

  const onRadioChange = (tariff) => {
    setCurrentTariff(tariff);
    getCurrentTariff(tariff);
  };


  return (
    <div className={`${payFormStyle.payForm} ${className}`}>
      <form name="payanyway_from" id="payanyway_from" action="https://moneta.ru/assistant.htm" method="post" onSubmit={(evt) => evt.target.reset()}>
        <div className={payFormStyle.block}>
          <CustomLabel htmlFor="email-field">Почта: </CustomLabel>
          <CustomInput type="text" id="email-field" placeholder="Ivan@gmail.com" onChange={(evt) => setEmail(evt.target.value)} required/>
        </div>
        <div className={payFormStyle.block}>
          <CustomLabel htmlFor="tel-field">Телефон: </CustomLabel>
          <CustomInput type="tel" id="tel-field" placeholder="+79209101525" name="number-phone" onChange={(evt) => setPhone(evt.target.value)} required/>
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
                <li className={payFormStyle.tariffRadioItem} key={tariff.idName}>
                  <input
                    type="radio"
                    className="visually-hidden"
                    name="tariff"
                    id={tariff.idName}
                    defaultValue={tariff.idName}
                    onChange={() => onRadioChange(tariff)}
                    defaultChecked={index === 0 ? true : false}
                  />
                  <label htmlFor={tariff.idName}>{tariff.name}</label>
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
        <input
          type="hidden"
          name="MNT_DESCRIPTION"
          defaultValue={`${currentTariff.description} Данные плательщика: email: ${email}; Телефон: ${phone}.`}
        />
        <input type="hidden" name="MNT_SUCCESS_URL" defaultValue={`${window.location.origin}/about`} />
      </form>
    </div>
  );
};

export default PayForm;
