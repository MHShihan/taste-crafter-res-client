import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import PopularMenu from "../home/PopularMenu";
import OutlineButton from "../../components/buttons/OutlineButton";
import menuCover from "../../assets/menu/banner3.jpg";
import DessertSection from "./DessertSection";
import SaladSection from "./SaladSection";

const Menu = () => {
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
        {/* First Section */}
        <section>
          <PopularMenu></PopularMenu>
          <div className="flex justify-center">
            <OutlineButton
              btnTitle={"ORDER YOUR favourite FOOD"}
            ></OutlineButton>
          </div>
        </section>

        {/* Desserts Section */}
        <section className="my-10">
          <DessertSection></DessertSection>
        </section>

        {/*  Salad Section */}
        <section>
          <SaladSection></SaladSection>
        </section>
      </menu>
    </div>
  );
};

export default Menu;
