import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <main className="max-w-7xl mx-auto">
        <Category></Category>
      </main>
    </div>
  );
};

export default Home;
