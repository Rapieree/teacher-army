import Layout from "../components/layout/layout";
import {footerContent} from "../content/common/footer";

const Contact = ({content}) => {
  return (
    <Layout content={content}>
      <h1>contact</h1>
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


export default Contact;
