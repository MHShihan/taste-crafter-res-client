import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Taste Crafter | Home</title>
      </Helmet>
      <Banner></Banner>
      <main className="max-w-7xl mx-auto px-2">
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonial></Testimonial>
      </main>
    </div>
  );
};

export default Home;
