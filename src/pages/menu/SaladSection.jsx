import Cover from "../../shared/cover/Cover";
import saladCover from "../../assets/menu/salad-bg.jpg";
import OutlineButton from "../../components/buttons/OutlineButton";
import MenuItems from "../../shared/menuItems/MenuItems";
import { Link } from "react-router-dom";

const SaladSection = ({ items }) => {
  return (
    <section>
      <Cover
        img={saladCover}
        height={"700px"}
        heading={"Salad"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <MenuItems items={items}></MenuItems>
      <Link to="/order/salad">
        <OutlineButton btnTitle={"ORDER YOUR favourite FOOD"}></OutlineButton>
      </Link>
    </section>
  );
};

export default SaladSection;
