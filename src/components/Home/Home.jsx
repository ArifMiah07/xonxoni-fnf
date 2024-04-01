import BannerSection from "../BannerSection/BannerSection";
import Features from "../Features/Features";

const Home = () => {


  return (
    <div className="flex flex-col items-center">
      <h1>this is home!</h1>
      <BannerSection></BannerSection>
      <Features></Features>
    </div>
  );
};

export default Home;
