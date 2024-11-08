import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import menuCover from "../../assets/menu/banner3.jpg";
import DessertSection from "./DessertSection";
import SaladSection from "./SaladSection";
import TodaysOffer from "./TodaysOffer";
import Pizza from "./Pizza";
import Soups from "./Soups";
import useFilteredMenu from "../../hooks/useFilteredMenu";

const Menu = () => {
  const [dessert, salad, pizza, soup, offered] = useFilteredMenu();

  return (
    <>
      <Helmet>
        <title>Taste Crafter | Menu</title>
      </Helmet>

      <Cover
        img={menuCover}
        height={"800px"}
        heading={"Our menu"}
        description={"Would you like to try a dish?"}
      ></Cover>

      <menu className="mt-12 max-w-7xl mx-auto px-3">
        <TodaysOffer items={offered}></TodaysOffer>

        <DessertSection items={dessert}></DessertSection>

        <SaladSection items={salad}></SaladSection>

        <Pizza items={pizza}></Pizza>

        <Soups items={soup}></Soups>
      </menu>
    </>
  );
};

export default Menu;
