import Layout from "../components/layout/layout";

const Home = () => {
  return (
    <Layout>
      <h1>home</h1>
    </Layout>
  );
};

export default Home;

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
