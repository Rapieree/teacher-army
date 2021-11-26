import Features from "../components/features/features";
import Idea from "../components/idea/idea";
import Layout from "../components/layout/layout";
import Promo from "../components/promo/promo";
import Statistics from "../components/statistics/statistics";
import Subscribe from "../components/subscribe/subscribe";
import Tariffs from "../components/tariffs/tariffs";
import Techs from "../components/techs/techs";
import UserReviews from "../components/user-reviews/user-reviews";
import mainPageStyle from "../styles/main-page.module.css";

const Main = () => {
  return (
    <Layout main>
      <Promo className="container mrgb-120" />

      <h1 className="visually-hidden">Landing page</h1>

      <Techs className="container mrgb-120" />

      <Idea className="container mrgb-120"/>

      <div className={mainPageStyle.statistics}>
        <Statistics className="container mrgb-120" />
      </div>

      <div className={`${mainPageStyle.features} mrgb-120`}>
        <Features className="container" />
      </div>

      <div className="container mrgb-120">
        <Subscribe />
      </div>

      <UserReviews className="container mrgb-120" />

      <div className={`${mainPageStyle.tariffs} mrgb-120`}>
        <Tariffs className="container" />
      </div>

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
