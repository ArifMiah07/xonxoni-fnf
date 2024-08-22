
import Features from "../../../components/Features/Features";
import BannerSection from "../Banner/BannerSection/BannerSection";


const Home = () => {


  return (
    <div className="flex flex-col items-center">
      <BannerSection></BannerSection>
      <Features></Features>
    </div>
  );
};

export default Home;