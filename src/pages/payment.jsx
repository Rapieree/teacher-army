import Layout from "../components/layout/layout";
import PayForm from "../components/pay-form/pay-form";
import {footerContent} from "../content/common/footer";
import paymentPageStyle from "../styles/payment-page.module.css";

const Prices = ({content}) => {
  return (
    <Layout content={content} className={paymentPageStyle.paymentPage}>
      <h1 className="visually-hidden">Payment page</h1>

      <div className="container">
        <PayForm />
      </div>
    </Layout>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      content: {
        footer: footerContent,
      },
    },
  };
};

export default Prices;
