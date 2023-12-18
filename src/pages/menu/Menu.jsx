import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import menuCover from "../../assets/menu/banner3.jpg";
import DessertSection from "./DessertSection";
import SaladSection from "./SaladSection";
import useMenu from "../../hooks/useMenu";
import TodaysOffer from "./TodaysOffer";
import Pizza from "./Pizza";
import Soups from "./Soups";

const Menu = () => {
  const [allMenu] = useMenu();

  const dessert = allMenu.filter((item) => item.category === "dessert");
  const salad = allMenu.filter((item) => item.category === "salad");
  const pizza = allMenu.filter((item) => item.category === "pizza");
  const soup = allMenu.filter((item) => item.category === "soup");
  const offered = allMenu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover
        img={menuCover}
        height={"800px"}
        heading={"Our menu"}
        description={"Would you like to try a dish?"}
      ></Cover>

      <menu className="mt-12 max-w-7xl mx-auto px-3">
        {/* Offered Section */}
        <TodaysOffer items={offered}></TodaysOffer>

        {/* Desserts Section */}
        <DessertSection items={dessert}></DessertSection>

        {/*  Salad Section */}
        <SaladSection items={salad}></SaladSection>

        {/* Pizza Section */}
        <Pizza items={pizza}></Pizza>

        {/* Soup Section */}
        <Soups items={soup}></Soups>
      </menu>
    </div>
  );
};

export default Menu;
