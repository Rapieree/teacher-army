import {ReactSVG} from "react-svg";
import CustomButton from "../components/custom-button/custom-button";
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
      <h1 className="title-page">Страница FAQ</h1>

      <div className={`${faqPageStyle.faqBlock} container`}>
        <div className={`${faqPageStyle.wrapper} mrgb-80`}>
          <h2 className="visually-hidden">Ответы на частозадаваемые вопросы</h2>
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
          <h2 className={`subtitle-page ${faqPageStyle.feedbackTitle}`}>Не нашли ответы на интересующие вопросы?</h2>
          <p className={`subtitle-page ${faqPageStyle.feedbackSubtitle}`}>Задайте их через форму, и мы с вами свяжемся в ближайшее время</p>
          <SubscribeForm className={faqPageStyle.feedbackForm}>
            <div className={faqPageStyle.extra}>
              <hr className={faqPageStyle.hr} />
              <p className={faqPageStyle.extraSeparatorText}>Или</p>
              <a href="https://t.me/kicumkicum" target="_blank" rel="noreferrer">
                <CustomButton className={faqPageStyle.telegramButton}>
                  <ReactSVG
                    src="images/svg/icon-telegram.svg"
                    className={faqPageStyle.telegramIcon}
                    width={25}
                    height={21}
                    wrapper="svg"
                  />
                Написать в Telegram
                </CustomButton>
              </a>
            </div>
          </SubscribeForm>
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
