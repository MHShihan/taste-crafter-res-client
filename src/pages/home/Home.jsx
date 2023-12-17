import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <main className="max-w-7xl mx-auto px-2">
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
      </main>
    </div>
  );
};

export default Home;
