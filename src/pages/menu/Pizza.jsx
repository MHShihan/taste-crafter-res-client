import Cover from "../../shared/cover/Cover";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import OutlineButton from "../../components/buttons/OutlineButton";
import MenuItems from "../../shared/menuItems/MenuItems";
import { Link } from "react-router-dom";

const Pizza = ({ items }) => {
  return (
    <section>
      <Cover
        img={pizzaImg}
        height={"700px"}
        heading={"Pizza"}
        description={"Would you like to try a dish?"}
      ></Cover>

      <div className="mt-10">
        <MenuItems items={items}></MenuItems>
      </div>

      <div className="flex justify-center">
        <Link to="/order/pizza">
          <OutlineButton btnTitle={"ORDER YOUR favourite FOOD"}></OutlineButton>
        </Link>
      </div>
    </section>
  );
};

export default Pizza;
