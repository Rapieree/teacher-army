import {useState} from "react";
import Layout from "../components/layout/layout";
import PayForm from "../components/pay-form/pay-form";
import {TariffCard} from "../components/tariffs/tariff-card";
import {footerContent} from "../content/common/footer";
import {tariffsContent} from "../content/common/tariffs";
import paymentPageStyle from "../styles/payment-page.module.css";

const payTariffs = [
  {
    name: `tariff-simple`,
    price: 1.00,
    description: `Тарифф Simple`,
  },
  {
    name: `tariff-smart`,
    price: 4.00,
    description: `Тарифф Smart`,
  },
];

const Prices = ({content}) => {
  const {tabFirst, tabSecond} = content.tariffs;
  const [tariffContent, setTariffContent] = useState(tabFirst);

  const getCurrentTariff = (tariff) => {
    switch (tariff) {
      case payTariffs[0]:
        setTariffContent(tabFirst);
        break;
      case payTariffs[1]:
        setTariffContent(tabSecond);
        break;
    }
  };

  return (
    <Layout content={content} className={paymentPageStyle.paymentPage}>
      <h1 className="title-page">Страница оплаты</h1>

      <div className={`${paymentPageStyle.payBlock} mrgb-120 container`}>
        <PayForm className={paymentPageStyle.payForm} getCurrentTariff={getCurrentTariff} payTariffs={payTariffs}/>
        <TariffCard className={paymentPageStyle.tariffCard} tariffData={tariffContent}/>
      </div>
    </Layout>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      content: {
        footer: footerContent,
        tariffs: tariffsContent,
      },
    },
  };
};

export default Prices;
