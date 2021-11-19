import Layout from "../components/layout/layout";
import Promo from "../components/promo/promo";
import Techs from "../components/techs/techs";

const Main = () => {
  return (
    <Layout main>
      <Promo className="container mrgb-120" />

      <h1 className="visually-hidden">Landing page</h1>

      <Techs className="container mrgb-120" />
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
