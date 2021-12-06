const PayForm = ({test = 0}) => {
  return (
    <form name="payanyway_from" id="payanyway_from" action="https://moneta.ru/assistant.htm" method="post">
      <fieldset>
        <input type="hidden" name="MNT_ID" value="29398836" />
        <label>Почта: <input type="text" name="MNT_DESCRIPTION" /></label>
        <input type="hidden" name="MNT_TEST_MODE" value={`${test}`} />
        <p>Сумма: <input type="text" name="MNT_AMOUNT" value="1.00" /></p>
        <input type="submit" value="Купить" />
      </fieldset>
    </form>
  );
};

export default PayForm;
