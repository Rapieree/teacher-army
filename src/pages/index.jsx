import Features from "../components/features/features";
import Idea from "../components/idea/Idea";
import Layout from "../components/layout/layout";
import Promo from "../components/promo/promo";
import Subscribe from "../components/subscribe/subscribe";
import Techs from "../components/techs/techs";
import mainPageStyle from "../styles/main-page.module.css";

const Main = () => {
  return (
    <Layout main>
      <Promo className="container mrgb-120" />

      <h1 className="visually-hidden">Landing page</h1>

      <Techs className="container mrgb-120" />

      <Idea className="container mrgb-120"/>

      <div className={`${mainPageStyle.features} mrgb-120`}>
        <Features className="container" />
      </div>

      <div className="container mrgb-120">
        <Subscribe />
      </div>

      <UserReviews className="container mrgb-120" />
    </Layout>
  );
};

export default Main;

/*
<Header>
  <Logo />
  <SiteNav />
  <CustomButton /> // GetStarted
</Header>

<main>
  <Promo>
    {title, slogan, subtitle, image}
    <div>
      <CustomButton /> // GetStarted
      <CustomButton /> // FreeTrial
    </div>
  </Promo>

  <Technologies />

  <Idea>
    {slogan, title, subtitle, image, etc}
    <CustomButton /> // Learn More
  </Idea>

  <Statistics />

  <Features>
    {slogan, title, subtitle}
    <FeatureItem />
  </Features>

  <UsersReviews>
    {title, subtitle}
    <Slider>
      <SliderItem>
        <ReviewItem >
          {name, description, text, etc}
          <StarsView />
        </ReviewItem>
      </SliderItem>
      <SliderControls />
    </Slider>
  </UsersReviews>

  <Tariffs>
    <TariffsNav>
      <CustomButton /> // Monthly
      <CustomButton /> // Yearly
    </TariffsNav>
    <Tabs>
      <MonthlyTariff />
      <YearlyTariff />
    </Tabs>
  </Tariffs>

  <Subscribe />
</main>

<Footer>
  <Logo />
  <Socials/>
  <LinksList /> // One
  <LinksList /> // Two
  <LinksList /> // Three
</Footer>
 */
