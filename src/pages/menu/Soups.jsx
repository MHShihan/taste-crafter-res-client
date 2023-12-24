import { Link } from "react-router-dom";
import soupImg from "../../assets/menu/soup-bg.jpg";
import OutlineButton from "../../components/buttons/OutlineButton";
import Cover from "../../shared/cover/Cover";
import MenuItems from "../../shared/menuItems/MenuItems";

const Soups = ({ items }) => {
  return (
    <section>
      <Cover
        img={soupImg}
        height={"700px"}
        heading={"Soup"}
        description={"Would you like to try a dish?"}
      ></Cover>

      <div className="mt-10">
        <MenuItems items={items}></MenuItems>
      </div>

      <div className="flex justify-center">
        <Link to="/order/soup">
          <OutlineButton btnTitle={"ORDER YOUR favourite FOOD"}></OutlineButton>
        </Link>
      </div>
    </section>
  );
};

export default Soups;
