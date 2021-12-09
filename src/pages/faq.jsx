import Layout from "../components/layout/layout";
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

      <div className={`${faqPageStyle.faqBlock} container mrgb-120`}>
        <div className={faqPageStyle.wrapper}>
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
