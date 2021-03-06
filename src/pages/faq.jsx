import Layout from "../components/layout/layout";
import SubscribeForm from "../components/subscribe-form/subscribe-form";
import {footerContent} from "../content/common/footer";
import faqPageStyle from "../styles/faq-page.module.css";

const faqContent = [
  {
    question: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
  },
  {
    question: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
  },
  {
    question: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
  },
  {
    question: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
  },
  {
    question: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
  },
];

const Faq = ({content}) => {
  return (
    <Layout content={content}>
      <h1 className="title-page">???????????????? FAQ</h1>

      <div className={`${faqPageStyle.faqBlock} container`}>
        <div className={`${faqPageStyle.wrapper} mrgb-80`}>
          <h2 className="visually-hidden">???????????? ???? ?????????????????????????????? ??????????????</h2>
          <ul className={faqPageStyle.list}>
            {
              faqContent.map((item, index) => (
                <li key={`${item.answer}-${index}`}>
                  <h3 className={faqPageStyle.question}>{item.question}</h3>
                  <p className={faqPageStyle.answer}>{item.answer}</p>
                  {index !== faqContent.length - 1 ? <hr className={faqPageStyle.hr} /> : null}
                </li>
              ))
            }
          </ul>
        </div>

        <div className={`${faqPageStyle.feedback} mrgb-120`}>
          <h2 className={`subtitle-page ${faqPageStyle.feedbackTitle}`}>???? ?????????? ???????????? ???? ???????????????????????? ???????????????</h2>
          <p className={`subtitle-page ${faqPageStyle.feedbackSubtitle}`}>?????????????? ???? ?????????? ??????????, ?? ???? ?? ???????? ???????????????? ?? ?????????????????? ??????????</p>
          <SubscribeForm className={faqPageStyle.feedbackForm} showExtraContacts={true}/>
        </div>
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

export default Faq;
