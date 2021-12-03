import Layout from "../components/layout/layout";
import {footerContent} from "../content/common/footer";

const About = ({content}) => {
  return (
    <Layout content={content}>
      <h1>about</h1>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      content: {
        footer: footerContent,
      },
    }
  };
};

export default About;

/*
<Header>
  <Logo />
  <SiteNav />
  <CustomButton /> // GetStarted
</Header>

<main>

</main>

<Footer>
  <Logo />
  <Socials/>
  <LinksList /> // One
  <LinksList /> // Two
  <LinksList /> // Three
</Footer>
*/
